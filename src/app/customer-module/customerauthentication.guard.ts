import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerauthenticationGuard implements CanActivate {
  unauthenticated:string=null
  constructor(private router:Router){

  }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(localStorage.getItem('email')==null)
      {
          this.unauthenticated="Please Login First!";
          this.router.navigate(["/customerlogin"]);
      }
      

    return true;
  }
  
}
