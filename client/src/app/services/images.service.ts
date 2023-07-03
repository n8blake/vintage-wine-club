import { Injectable } from '@angular/core';
import { catchError, tap, Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Image } from '../interfaces/image.interface';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  baseURL: string = '';

  constructor(private http: HttpClient) {
    if (!environment.production) {
      this.baseURL = environment.apiURL;
    }
  }

}
