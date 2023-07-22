import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompositionSelectionComponent } from './composition-selection.component';

describe('CompositionSelectionComponent', () => {
  let component: CompositionSelectionComponent;
  let fixture: ComponentFixture<CompositionSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompositionSelectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompositionSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
