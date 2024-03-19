import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-barra-progresso',
  standalone: true,
  imports: [],
  templateUrl: './barra-progresso.component.html',
  styleUrl: './barra-progresso.component.css'
})
export class BarraProgressoComponent {
  vl_disponivel: number = 0;

  @Input() usado: number = 0;
  @Input() total: number = 100;
  @Input() vl_usado: string = '';
  @Input() vl_total: string = '';
  @Input() imagemVisivel: boolean = false;


  calcularValorDisponivel() {
    const valorUsado = parseFloat(this.vl_usado.replace(',', '.'));
    const valorTotal = parseFloat(this.vl_total.replace(',', '.'));
    this.usado = valorUsado;
    this.total = valorTotal; 

    if (!isNaN(valorUsado) && !isNaN(valorTotal)) {
      this.vl_disponivel = valorUsado/ valorTotal;
      this.usado = valorUsado;
    } else {
      this.vl_disponivel = 0;
    }
  }

  ngOnInit() {
    this.calcularValorDisponivel();
  }
}