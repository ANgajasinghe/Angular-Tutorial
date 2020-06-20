import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShopingListComponent } from './shoping-list/shoping-list.component';


const routes: Routes = [
  {path:'',redirectTo : '/recipe' , pathMatch:'full'} ,
  {path:'recipe',component : RecipesComponent},
  {path:'shoping-list' , component:ShopingListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
