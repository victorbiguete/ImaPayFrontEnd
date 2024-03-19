import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubtsPresentationComponent } from './doubts-presentation.component';

describe('DoubtsPresentationComponent', () => {
  let component: DoubtsPresentationComponent;
  let fixture: ComponentFixture<DoubtsPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoubtsPresentationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoubtsPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
