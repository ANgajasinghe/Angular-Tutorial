import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShopingListServices } from '../shoping-list/shoping-list.service';

@Injectable()
export class RecipeServices {

    recipeSelected = new EventEmitter<Recipe>();

    //manage our recipes 
    private recipes:Array<Recipe> = [
        new Recipe('A Test recipe',
        'This is a Simple a test',
        'https://img.sndimg.com/food/image/upload/c_thumb,q_80,w_412,h_232/v1/img/recipes/11/75/32/CDncru7fQg2fz64NdtHk_Quick%20and%20easy%20pizza%20dough%20117532-5.jpg',
        [
            new Ingredient('Meet', 1),
            new Ingredient('French Fries', 20),
        ]),
    
        new Recipe('A Test recipe 01 ','This is a Simple a test 01','https://www.biggerbolderbaking.com/wp-content/uploads/2019/07/15-Minute-Pizza-WS-Thumbnail.png',
        [  new Ingredient('Tommato', 5),
           new Ingredient('Chese', 2),])
      ];
    
    constructor(private slService : ShopingListServices){}

    getRecipes(){
        //.slice retun same coppy of array (Only a copy)
        return this.recipes.slice();
    }

    getRecipeById(id : number){
        return this.recipes[id];
        //return this.recipes.slice()[id];

    }

    addIngredinetToShoppingList(ingredient : Ingredient[]){
        this.slService.addIngredients(ingredient);
    }

    
}