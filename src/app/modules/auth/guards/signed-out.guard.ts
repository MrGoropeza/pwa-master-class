import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class SignedOutGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.authService.checkAuth().pipe(
        map((user) => {
          return user === null;
        }),
        tap((res) => {
          if(res){
            return route;
          }else{
            return this.router.navigate(["/todos"]);
          }
        })
      );
  }
  
}
