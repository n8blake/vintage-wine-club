import { TestBed } from '@angular/core/testing';

import { NoteCategoryRouteActivatorService } from './note-category-route-activator.service';

describe('NoteCategoryRouteActivatorService', () => {
  let service: NoteCategoryRouteActivatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NoteCategoryRouteActivatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
