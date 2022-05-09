import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
export class RecipeService {
    reciepSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
      'this is a test',
      'https://cdn.pickuplimes.com/cache/54/d3/54d3d1f1dd4de3486e077335d89a2948.jpg'
    ),
    new Recipe(
      'A test recipe2',
      'this is a test2',
      'https://cdn.pickuplimes.com/cache/54/d3/54d3d1f1dd4de3486e077335d89a2948.jpg'
    ),
  ];

  getRecipe() {
    return this.recipes.slice(); //get the copy of our array
  }
}
