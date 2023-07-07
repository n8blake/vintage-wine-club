import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WineNoteCategoriesListComponent } from './wine-note-categories-list.component';

describe('WineNoteCategoriesListComponent', () => {
  let component: WineNoteCategoriesListComponent;
  let fixture: ComponentFixture<WineNoteCategoriesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WineNoteCategoriesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WineNoteCategoriesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
