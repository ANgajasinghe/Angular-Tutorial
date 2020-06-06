import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShopingListServices } from './shoping-list.service';


@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css']

})
export class ShopingListComponent implements OnInit {

  ingredients : Array<Ingredient>
  
  constructor(private ingredientService : ShopingListServices) { }

  ngOnInit(): void {
    this.ingredients = this.ingredientService.getIngredients();
    
    this.ingredientService.ingredientChange.subscribe(
      (ingredients : Ingredient[])=> {
          this.ingredients = ingredients;
      }
      );
  }
    

}
