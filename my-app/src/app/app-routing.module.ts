import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShopingListComponent } from './shoping-list/shoping-list.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';


const routes: Routes = [
  {path:'',redirectTo : '/recipe' , pathMatch:'full'} ,
  {path:'recipe',component : RecipesComponent ,
  children :[
    {path:'' , component : RecipeStartComponent},
    {path:':id',component : RecipeDetailsComponent}
  ]
  },
  {path:'shoping-list' , component:ShopingListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
