import { Injectable } from '@angular/core';
import { UsersManagerService } from './users-manager.service';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserProfileResolverService implements Resolve<unknown> {

  constructor(private usersService: UsersManagerService) { }

  resolve(route: ActivatedRouteSnapshot): unknown {
    console.log("getting user");
    console.log(route.params['id'])
    return this.usersService.getUser(route.params['id']);
  }
  
}
