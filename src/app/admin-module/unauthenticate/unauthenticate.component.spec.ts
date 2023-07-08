import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnauthenticateComponent } from './unauthenticate.component';

describe('UnauthenticateComponent', () => {
  let component: UnauthenticateComponent;
  let fixture: ComponentFixture<UnauthenticateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnauthenticateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnauthenticateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
