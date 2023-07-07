import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { IWineNoteCategory } from '../interfaces/wine-note-category';
import { WineService } from './wine.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteCategoryResolverServiceService implements Resolve<IWineNoteCategory> {

  constructor(private wineService: WineService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): IWineNoteCategory | Observable<IWineNoteCategory> | Promise<IWineNoteCategory> {
    console.log(`getting ${route.params['category']}`)
    return this.wineService.getNoteCategory(route.params['category']);
  }

}
