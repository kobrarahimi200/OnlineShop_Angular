import { Recipe } from './../recipe.model';
import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() getRecipesFromRecipe: Recipe;
  @ViewChild('dropdown') dropdpwn;
  
  constructor() { }

  ngOnInit(): void {
  }
print(){
  console.log("clciked on btn")
}

}
