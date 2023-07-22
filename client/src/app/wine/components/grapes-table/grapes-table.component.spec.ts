import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrapesTableComponent } from './grapes-table.component';

describe('GrapesTableComponent', () => {
  let component: GrapesTableComponent;
  let fixture: ComponentFixture<GrapesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrapesTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrapesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
