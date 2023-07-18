import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { WineService } from './wine.service';

@Injectable({
  providedIn: 'root'
})
export class WineRouteActivatorService implements CanActivate {

  constructor(private wineSerive: WineService, private router:Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const wineExists = !!this.wineSerive.getWineById(route.params['wineId'])
    // if(route.params['wineId'] == 'new'){
    //   return true;
    // }
    if(!wineExists) this.router.navigate(['/404'])
    return wineExists
  }

}
