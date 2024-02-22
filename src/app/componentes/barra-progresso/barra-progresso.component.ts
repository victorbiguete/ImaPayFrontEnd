import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-barra-progresso',
  standalone: true,
  imports: [],
  templateUrl: './barra-progresso.component.html',
  styleUrl: './barra-progresso.component.css'
})
export class BarraProgressoComponent {
  @Input() usado: number = 0;
  @Input() total: number = 100;
  @Input() vl_minimo: string = '';
  @Input() vl_maximo: string = '';
  @Input() legenda: string = 'Progresso';
}
