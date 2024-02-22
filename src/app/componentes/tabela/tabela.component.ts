import { Component, Input } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

interface Transacao {
	tipo: string;
	data: string;
	nome: string;
	valor: string;
  	descricao: string;
}
  

@Component({
  selector: 'app-tabela',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './tabela.component.html',
  styleUrl: './tabela.component.css',
  providers: []
})

export class TabelaComponent {
	@Input() transacoes: Transacao[] | undefined; 
}
		
