import { Injectable } from '@angular/core';
import { UsersManagerService } from './users-manager.service';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserRouteActivatorService implements CanActivate {

  constructor(private usersService: UsersManagerService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const userExists = !!this.usersService.getUser(route.params['id'])
    if(!userExists) this.router.navigate(['/404'])
    return userExists;
  }

}
