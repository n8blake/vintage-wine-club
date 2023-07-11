import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WineAddEditComponent } from './wine-add-edit.component';

describe('WineAddEditComponent', () => {
  let component: WineAddEditComponent;
  let fixture: ComponentFixture<WineAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WineAddEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WineAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
