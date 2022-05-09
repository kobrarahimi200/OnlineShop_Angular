import { RecipeService } from './../recipe.service';
import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];

  // @Output() selectedRecipeList = new EventEmitter<Recipe>();//send this to parent (recipe)

  constructor(private recipeServiec: RecipeService) {}

  ngOnInit() {this.recipes = this.recipeServiec.getRecipe()}

  // setSelectedRecipe(recipe: Recipe) {
  //   this.selectedRecipeList.emit(recipe);
  //   console.log(recipe.name);
  // }
}
