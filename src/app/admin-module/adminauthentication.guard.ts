import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminService } from './services/admin.service';

@Injectable({
  providedIn: 'root'
})
export class AdminauthenticationGuard implements CanActivate {
  
      constructor(private router: Router, private adminservice: AdminService){


    }
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(localStorage.getItem('adminemail')==null)
      {
        this.router.navigate(["/unauthenticatedadmin"]);
      }
    
    
      return true;
  }

  
}
