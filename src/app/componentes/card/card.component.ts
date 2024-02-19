import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() tituloCard: string = '';
  @Input() srcIcone: string = '';
  @Input() altIcone: string = '';
  @Input() valor: string = '';
  @Input() textoCard: string ='';
}
