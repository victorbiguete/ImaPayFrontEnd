import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPresentationComponent } from './main-presentation.component';

describe('MainPresentationComponent', () => {
  let component: MainPresentationComponent;
  let fixture: ComponentFixture<MainPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainPresentationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
