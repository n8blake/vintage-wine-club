import { Injectable, InjectionToken, Inject } from '@angular/core';

export const AM_TOKEN = new InjectionToken<unknown>('mapkit');

@Injectable({
  providedIn: 'root',
})
export class MapService {
  constructor(@Inject(AM_TOKEN) private mapkit: any) {}
}
