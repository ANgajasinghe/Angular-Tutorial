import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeServices } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  recipe : Recipe;
  id : number
  constructor(private recipeService : RecipeServices,
              private activeRoute : ActivatedRoute,
              private  router:Router,
    ) { }

  ngOnInit(): void {
   this.activeRoute.params.subscribe(
      (param : Params)=>{
        this.id = +param['id'];
        this.recipe = this.recipeService.getRecipeById(this.id);
    });
  }

  onAddToShoppingList(){
      this.recipeService.addIngredinetToShoppingList(this.recipe.ingredients)
  }

  onEditRecipe(){
      this.router.navigate(['edit'],{relativeTo : this.activeRoute})
      //this.router.navigate(['../',this.id , 'edit'] , {relativeTo : this.activeRoute})
  }

  

}
