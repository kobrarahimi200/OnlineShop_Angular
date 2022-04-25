import { Recipe } from './../../recipe.model';
import { Component, Input, OnInit, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  constructor() {}

  @Input() recipe: Recipe; //sending data from parent to child component
  @Output() selectedRecipe = new EventEmitter<Recipe>();

  ngOnInit(): void {}

  showRecipe() {
    this.selectedRecipe.emit(this.recipe);
  }
}
