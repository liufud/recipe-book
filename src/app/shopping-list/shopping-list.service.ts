import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from "../../../node_modules/@angular/core";

export class ShoppingListService {
    // shopping list data
    // add ingredient method
    ingredientChanged = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
      ];
    
    getIngredients() {
        return this.ingredients.slice();
    }
    
    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientChanged.emit(this.ingredients.slice());
    }

    addIngredientsToList(ingredients: Ingredient[]) {
        
        // ingredients.forEach(function (ingredient) {
        //     this.ingredients.push(ingredient);
        //     this.ingredientChanged.emit(this.ingredients.slice());
        // });
        // Array.prototype.push.apply(this.ingredients, ingredients);
        this.ingredients.push(...ingredients);
        // this.ingredients.push.apply(ingredients, this.ingredients);
        this.ingredientChanged.emit(this.ingredients.slice());
    }
}