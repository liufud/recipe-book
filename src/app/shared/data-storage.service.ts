import { Injectable } from "../../../node_modules/@angular/core";
import { HttpClient,  } from "@angular/common/http";
import { map } from 'rxjs/operators';
import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";
import { AuthService } from "../auth/auth.service";

@Injectable()
export class DataStorageService {
    constructor(
        private http: HttpClient,
        private recipeService: RecipeService,
        private authSerive: AuthService
    ) {}

    storeRecipes() {
        const token = this.authSerive.getToken();
        return this.http.put<Recipe[]>('https://ng-recipe-book-80791.firebaseio.com/recipes.json?auth=' + token,
                      this.recipeService.getRecipes());
    }

    getRecipes() {
        const token = this.authSerive.getToken();
        this.http.get<Recipe[]>('https://ng-recipe-book-80791.firebaseio.com/recipes.json?auth=' + token)
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