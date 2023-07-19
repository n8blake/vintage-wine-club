import { TestBed } from '@angular/core/testing';

import { GrapesService } from './grapes.service';

describe('GrapesService', () => {
  let service: GrapesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrapesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
