import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnywhereAccPresentationComponent } from './anywhere-acc-presentation.component';

describe('AnywhereAccPresentationComponent', () => {
  let component: AnywhereAccPresentationComponent;
  let fixture: ComponentFixture<AnywhereAccPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnywhereAccPresentationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnywhereAccPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
