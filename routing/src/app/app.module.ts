import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//=== make sure to add to top ===
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';


const appRoutes : Routes =[
  {path:'' , component : HomeComponent}, //first path 
  {path:'users' , component : UsersComponent},
  {path:'users/:id/:name' , component : UserComponent},//:id = (:) == dynamaic
  {path:'servers' , component : ServersComponent},
  {path:'servers/:id' , component : ServerComponent},
  {path:'servers/:id/edit' , component : EditServerComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes) // add routes 
  ],
  providers: [ServersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
