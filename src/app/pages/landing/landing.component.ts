import { Component } from '@angular/core';
import { HttpCpfService } from '../../services/httpCpf/http-cpf.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
})
export class LandingComponent {
  constructor(private httpCpf: HttpCpfService) {}

  public res?: any;

  ngOnInit(): void {
    this.httpCpf.get('36300096').subscribe(
      (reponse) => {
        this.res = reponse;
        console.log(this.res);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
// {
//   "cep": "36300096",
//   "state": "MG",
//   "city": "São João Del Rei",
//   "neighborhood": "Centro",
//   "street": "Rua Gomes Pedroso",
//   "service": "correios-alt"
// }
