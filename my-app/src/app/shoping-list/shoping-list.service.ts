import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShopingListServices {

    ingredientChange = new EventEmitter<Ingredient[]>();
    
    private ingredients : Array<Ingredient> = [
        new Ingredient('apple',5),
        new Ingredient('Tomatoes',10),
        new Ingredient('banana',20),
      ];

    getIngredients(){
        return this.ingredients.slice();
    }

    addIngredient(ingredient){
        this.ingredients.unshift(ingredient);
        this.ingredientChange.emit(this.ingredients.slice());
    }

    addIngredients(ingredients : Ingredient[]){


        // ingredients.forEach(ingredient => {
        //     this.addIngredient(ingredient)
        // });
        // ... is a spred operator js ES6 
        this.ingredients.unshift(...ingredients);
        this.ingredientChange.emit(this.ingredients.slice());

    }

    
    
}