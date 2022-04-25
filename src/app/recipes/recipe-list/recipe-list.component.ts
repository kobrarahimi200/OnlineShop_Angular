import { Recipe } from './../recipe.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
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

  @Output() selectedRecipeList = new EventEmitter<Recipe>();//send this to parent (recipe)

  constructor() {}

  ngOnInit(): void {}

  setSelectedRecipe(recipe: Recipe) {
    this.selectedRecipeList.emit(recipe);
    console.log(recipe.name);
  }
}
