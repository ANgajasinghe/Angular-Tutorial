import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeServices } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>(); 
  //Array on recipes 
  recipes : Array<Recipe>;
  
  constructor(private recipeService : RecipeServices , 
              private  router:Router,
              private currentRoute : ActivatedRoute
    ) {}

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }

  onRecipeSelected(item : Recipe){
      console.log(item);
      this.recipeWasSelected.emit(item);
  }

  onNewRecipe(){
    this.router.navigate(['new'],{relativeTo : this.currentRoute})
  }

}
