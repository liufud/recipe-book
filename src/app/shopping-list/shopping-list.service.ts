import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "../../../node_modules/rxjs";

export class ShoppingListService {
    // shopping list data
    // add ingredient method
    ingredientChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
      ];
    
    getIngredients() {
        return this.ingredients.slice();
    }

    getIngredient(index: number) {
        return this.ingredients[index];
    }
    
    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientChanged.next(this.ingredients.slice());
    }

    addIngredientsToList(ingredients: Ingredient[]) {
        
        // ingredients.forEach(function (ingredient) {
        //     this.ingredients.push(ingredient);
        //     this.ingredientChanged.emit(this.ingredients.slice());
        // });
        // Array.prototype.push.apply(this.ingredients, ingredients);
        this.ingredients.push(...ingredients);
        // this.ingredients.push.apply(ingredients, this.ingredients);
        this.ingredientChanged.next(this.ingredients.slice());
    }

    updateIngredient(index: number, newIngredient: Ingredient) {
        this.ingredients[index] = newIngredient;
        this.ingredientChanged.next(this.ingredients.slice());
    }

    deleteIngredient(index: number) {
        this.ingredients.splice(index, 1);
        this.ingredientChanged.next(this.ingredients.slice());
    }
}