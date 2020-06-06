import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShopingListServices } from '../shoping-list.service';

@Component({
  selector: 'app-shoping-edit',
  templateUrl: './shoping-edit.component.html',
  styleUrls: ['./shoping-edit.component.css']
})
export class ShopingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputRef : ElementRef;
  @ViewChild('amountInput') nameAmountRef : ElementRef;

 //@Output()ingreadientAdded = new EventEmitter<Ingredient>();

  constructor(private shopingListService : ShopingListServices) { }

  ngOnInit(): void {
  }

  onAddItem(){
    const newIngredient = new Ingredient(
      this.nameInputRef.nativeElement.value , 
      this.nameAmountRef.nativeElement.value);

      //this.shopingListService.addIngredients.emit(newIngredient);
      this.shopingListService.addIngredient(newIngredient);

      //this.ingreadientAdded.emit(newIngredient);
  }

}
