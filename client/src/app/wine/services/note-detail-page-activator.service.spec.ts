import { TestBed } from '@angular/core/testing';

import { NoteDetailPageActivatorService } from './note-detail-page-activator.service';

describe('NoteDetailPageActivatorService', () => {
  let service: NoteDetailPageActivatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NoteDetailPageActivatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
