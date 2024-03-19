import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartBankingPresentationComponent } from './smart-banking-presentation.component';

describe('SmartBankingPresentationComponent', () => {
  let component: SmartBankingPresentationComponent;
  let fixture: ComponentFixture<SmartBankingPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmartBankingPresentationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SmartBankingPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
