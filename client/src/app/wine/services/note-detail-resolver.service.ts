import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { IWineNote } from '../interfaces/wine-note';
import { WineService } from './wine.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteDetailResolverService implements Resolve<IWineNote> {

  constructor(private wineService: WineService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): IWineNote | Observable<IWineNote> | Promise<IWineNote> {
    return this.wineService.getNoteById(route.params['note'])
  }
  
}
