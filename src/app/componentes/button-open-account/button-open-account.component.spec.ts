import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonOpenAccountComponent } from './button-open-account.component';

describe('ButtonOpenAccountComponent', () => {
  let component: ButtonOpenAccountComponent;
  let fixture: ComponentFixture<ButtonOpenAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonOpenAccountComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonOpenAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
