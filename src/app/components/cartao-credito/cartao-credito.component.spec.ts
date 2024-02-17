import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaoCreditoComponent } from './cartao-credito.component';

describe('CartaoCreditoComponent', () => {
  let component: CartaoCreditoComponent;
  let fixture: ComponentFixture<CartaoCreditoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartaoCreditoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CartaoCreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
