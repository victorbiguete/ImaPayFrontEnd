import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlusPresentationComponent } from './plus-presentation.component';

describe('PlusPresentationComponent', () => {
  let component: PlusPresentationComponent;
  let fixture: ComponentFixture<PlusPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlusPresentationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlusPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
