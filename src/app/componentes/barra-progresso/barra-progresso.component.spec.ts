import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraProgressoComponent } from './barra-progresso.component';

describe('BarraProgressoComponent', () => {
  let component: BarraProgressoComponent;
  let fixture: ComponentFixture<BarraProgressoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarraProgressoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BarraProgressoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
