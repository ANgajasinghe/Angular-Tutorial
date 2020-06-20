import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { ServersService } from "../servers.service";
import { Injectable } from "@angular/core";

/*
    resolver will fire before the routing is load 
    eg : interface : Resolve<{id: number , name: string , status : string}>
    {id: number , name: string , status : string} this is a type definition of the resoler 
    it means what will give at the end by this resolver

    OR 

    we can put these to an interface and use that like bellow
*/

interface Server {
    id: number , 
    name: string , 
    status : string
}

//export class  ServerResolver implements Resolve<{id: number , name: string , status : string}>{
//OR

@Injectable()
export class  ServerResolver implements Resolve<Server>{

    constructor(private serverService : ServersService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): import("rxjs").Observable<Server> | Promise<Server> | Server
    {
        return this.serverService.getServer(+route.params['id'])
    }

}