import {NgModule} from '@angular/core';
//=== make sure to add to top ===
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { UsersComponent } from "./users/users.component";
import { UserComponent } from "./users/user/user.component";
import { ServersComponent } from "./servers/servers.component";
import { ServerComponent } from "./servers/server/server.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { AuthGuardServices } from './auth-guard.service';
import { CanDeactivateGuard } from './servers/edit-server/can-deactivate-guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ServerResolver } from './servers/server/server-resolver.service';


const appRoutes : Routes =[
    {path:'' , component : HomeComponent}, //first path 
    {path:'users' , component : UsersComponent , children :[  
      {path:':id/:name' , component : UserComponent}
    ]},
    // Guard the router in here this will automaticaly applied to the child components as well . 

    {path:'servers' ,//canActivate:[AuthGuardServices] 

      canActivateChild : [AuthGuardServices] //-- this Guard will effets only to the child routes in this parent routs 
    , component : ServersComponent 
    , children:[
      //Add resolver 
      {path:':id' , component : ServerComponent , resolve : {server : ServerResolver}},
      {path:':id/edit' , component : EditServerComponent , canDeactivate:[CanDeactivateGuard]}
    ]}, 
    //pass data to component
    { path:'not-found' , component : ErrorPageComponent , data : {message : "Page - not found"} },
    //this wildcard route must be in the end of the router array
    { path:'**' , redirectTo : '/not-found'} 
    
  ];
  
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes) // add routes 
    ],
    exports:[RouterModule]
})
export class AppRoutingModule {
}