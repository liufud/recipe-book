import { Injectable } from "../../../node_modules/@angular/core";
import { HttpClient,  } from "@angular/common/http";
import { map } from 'rxjs/operators';
import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";

@Injectable()
export class DataStorageService {
    constructor(
        private http: HttpClient,
        private recipeService: RecipeService
    ) {}

    storeRecipes() {
        return this.http.put<Recipe[]>('https://ng-recipe-book-80791.firebaseio.com/recipes.json', 
                      this.recipeService.getRecipes());
    }

    getRecipes() {
        this.http.get<Recipe[]>('https://ng-recipe-book-80791.firebaseio.com/recipes.json')
        .pipe(
            map(
                (response) => {
                    const recipes = response;
                    for (let recipe of recipes) {
                        if (!recipe['ingredients']) {
                            console.log(recipe);
                            recipe['ingredients'] = [];
                        }
                    }
                    return recipes;
                }
            )
        )
        .subscribe(
            (recipes: Recipe[]) => {
                this.recipeService.setRecipes(recipes);
            }
        );
    }
}