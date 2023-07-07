import { Injectable } from '@angular/core';
import { WineService } from './wine.service';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteCategoryRouteActivatorService implements CanActivate {

  constructor(private wineService: WineService, private router:Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    console.log(route.params['category']);
    const noteCategoryExists = !!this.wineService.getNoteCategory(route.params['category'])
    //if(!noteCategoryExists) this.router.navigate(['/404'])
    return noteCategoryExists
  }

}
