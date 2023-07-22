import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WineLandingPageComponent } from './wine-landing-page.component';

describe('WineLandingPageComponent', () => {
  let component: WineLandingPageComponent;
  let fixture: ComponentFixture<WineLandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WineLandingPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WineLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
