import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;
  // @Output() addNewIngredient = new EventEmitter<Ingredient>();

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  addIngredient() {
    // this.addNewIngredient.emit(new Ingredient
    //                                 (this.nameInput.nativeElement.value,
    //                                  this.amountInput.nativeElement.value)
    //                           );
    this.shoppingListService.addIngredient(
                                            new Ingredient(this.nameInput.nativeElement.value,
                                                           this.amountInput.nativeElement.value)
                                            );      
  }
}
