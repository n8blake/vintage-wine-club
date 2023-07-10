import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { WineService } from './wine.service';

@Injectable({
  providedIn: 'root'
})
export class NoteDetailPageActivatorService implements CanActivate {

  constructor(private wineService: WineService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const noteExists = !!this.wineService.getNoteById(route.params['note'])
    return noteExists;
  }

}
