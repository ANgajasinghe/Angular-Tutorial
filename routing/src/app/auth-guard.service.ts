import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from "@angular/router";
import { Injectable } from "@angular/core";
import { AuthService } from "./auth-service";


@Injectable()
export class AuthGuardServices implements CanActivate , CanActivateChild{

    constructor(private authService : AuthService , private route : Router){}

     //we can apply these to the differents hooks to child routes
    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
        return this.canActivate(childRoute , state);
    }
    
    canActivate(route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
       return this.authService.isAuthenticated()
        .then((result : boolean)=>{
            if (result) {
                return true;
            } else {
                this.route.navigate(['/']);
            }
        })
    }

}