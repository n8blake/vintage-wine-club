import { TestBed } from '@angular/core/testing';

import { NoteDetailResolverService } from './note-detail-resolver.service';

describe('NoteDetailResolverService', () => {
  let service: NoteDetailResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NoteDetailResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
