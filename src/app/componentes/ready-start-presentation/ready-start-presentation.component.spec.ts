import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadyStartPresentationComponent } from './ready-start-presentation.component';

describe('ReadyStartPresentationComponent', () => {
  let component: ReadyStartPresentationComponent;
  let fixture: ComponentFixture<ReadyStartPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReadyStartPresentationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReadyStartPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
