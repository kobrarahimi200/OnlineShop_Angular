import { Ingredient } from './../../shared/ingredient.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() ingredientRef = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit(): void {
  }
  onAdd(nameRef, amountRef){
    this.ingredientRef.emit(new Ingredient(nameRef, amountRef));
    console.log("ref values " + nameRef + amountRef);
  }
}
