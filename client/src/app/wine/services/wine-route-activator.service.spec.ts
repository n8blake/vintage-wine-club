import { TestBed } from '@angular/core/testing';

import { WineRouteActivatorService } from './wine-route-activator.service';

describe('WineRouteActivatorService', () => {
  let service: WineRouteActivatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WineRouteActivatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
