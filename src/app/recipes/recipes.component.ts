import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';
import { Subscription } from '../../../node_modules/rxjs';
import { ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  recipe: Recipe;
  paramSubscription: Subscription;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.recipeService.recipeSelected
    .subscribe(
      (recipe: Recipe) => {
        this.recipe = recipe;
      }
    );
  }

  displayRecipeDetail(recipe: Recipe) {
    this.recipe = recipe;
  }

}
