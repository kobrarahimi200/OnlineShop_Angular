import { RecipeService } from './../../recipe.service';
import { Recipe } from './../../recipe.model';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  constructor(private recipeService: RecipeService) {}

  @Input() recipe: Recipe; //sending data from parent to child component

  ngOnInit(): void {}

  showRecipe() {
    this.recipeService.reciepSelected.emit(this.recipe);
  }
}
