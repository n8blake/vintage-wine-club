import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WineNoteCategoriesDetailComponent } from './wine-note-categories-detail.component';

describe('WineNoteCategoriesDetailComponent', () => {
  let component: WineNoteCategoriesDetailComponent;
  let fixture: ComponentFixture<WineNoteCategoriesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WineNoteCategoriesDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WineNoteCategoriesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
