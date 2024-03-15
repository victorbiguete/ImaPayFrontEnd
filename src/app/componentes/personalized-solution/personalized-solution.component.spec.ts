import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalizedSolutionComponent } from './personalized-solution.component';

describe('PersonalizedSolutionComponent', () => {
  let component: PersonalizedSolutionComponent;
  let fixture: ComponentFixture<PersonalizedSolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonalizedSolutionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonalizedSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
