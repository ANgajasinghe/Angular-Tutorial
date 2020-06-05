import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>(); 
  //Array on recipes 
  
  recipes:Array<Recipe> = [
    new Recipe('A Test recipe',
    'This is a Simple a test',
    'https://img.sndimg.com/food/image/upload/c_thumb,q_80,w_412,h_232/v1/img/recipes/11/75/32/CDncru7fQg2fz64NdtHk_Quick%20and%20easy%20pizza%20dough%20117532-5.jpg'),

    new Recipe('A Test recipe 01 ','This is a Simple a test 01','https://www.biggerbolderbaking.com/wp-content/uploads/2019/07/15-Minute-Pizza-WS-Thumbnail.png')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(item : Recipe){
      console.log(item);
      this.recipeWasSelected.emit(item);
  }

}
