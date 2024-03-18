import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeposityComponent } from './deposity.component';

describe('DeposityComponent', () => {
  let component: DeposityComponent;
  let fixture: ComponentFixture<DeposityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeposityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeposityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
