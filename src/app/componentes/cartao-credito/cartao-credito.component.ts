import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cartao-credito',
  standalone: true,
  imports: [],
  templateUrl: './cartao-credito.component.html',
  styleUrl: './cartao-credito.component.css'
})
export class CartaoCreditoComponent {
  @Input() nomeCartao: string = '';
  @Input() srcImgBandeira: string = '';
  @Input() altImgBandeira: string = '';
  @Input() numCartao: string = '';
  @Input() nomeTitular: string ='';
  @Input() validade: string ='';
}
