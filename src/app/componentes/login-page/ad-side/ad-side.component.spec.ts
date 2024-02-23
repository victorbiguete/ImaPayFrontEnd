import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdSideComponent } from './ad-side.component';

describe('AdSideComponent', () => {
  let component: AdSideComponent;
  let fixture: ComponentFixture<AdSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdSideComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
