import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EwalletComponent } from './ewallet.component';

describe('EwalletComponent', () => {
  let component: EwalletComponent;
  let fixture: ComponentFixture<EwalletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EwalletComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EwalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
