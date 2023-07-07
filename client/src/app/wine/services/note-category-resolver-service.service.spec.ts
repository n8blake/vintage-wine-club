import { TestBed } from '@angular/core/testing';

import { NoteCategoryResolverServiceService } from './note-category-resolver-service.service';

describe('NoteCategoryResolverServiceService', () => {
  let service: NoteCategoryResolverServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NoteCategoryResolverServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
