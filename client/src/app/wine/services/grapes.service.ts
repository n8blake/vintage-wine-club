import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IGrapeVarietal } from '../interfaces/grape-varietal';
import { handleError } from 'src/app/errors/error-handler';

@Injectable({
  providedIn: 'root',
})
export class GrapesService {
  baseURL: string = '';
  grapesURL: string = '';

  constructor(private http: HttpClient) {
    if (!environment.production) {
      this.baseURL = environment.apiURL;
    }
    this.grapesURL = this.baseURL + '/api/grapes/';
  }

  getGrapes(): Observable<IGrapeVarietal[]> {
    return this.http
      .get<IGrapeVarietal[]>(this.grapesURL)
      .pipe(catchError(handleError<IGrapeVarietal[]>('getGrapes')));
  }

}
