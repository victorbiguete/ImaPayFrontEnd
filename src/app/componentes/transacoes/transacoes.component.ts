import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-transacoes',
  standalone: true,
  imports: [CommonModule, MenuComponent],
  templateUrl: './transacoes.component.html',
  styleUrl: './transacoes.component.css'
})
export class TransacoesComponent {

  transacoes = [
    //Dados apenas para teste:
    {
      "tipo": "Remuneração/salário",
      "data": "28/12/2023",
      "nome": "Amazon Services",
      "valor": "15,00",
      "descricao": ""
    },
    {
      "tipo": "Transferência enviada",
      "data": "25/11/2023",
      "nome": "Editora Democritus",
      "valor": "50,00",
      "descricao": "Pix"
    },
    {
      "tipo": "Transferência recebida",
      "data": "31/10/2023",
      "nome": "Roberto B",
      "valor": "47,00",
      "descricao": "Pix"
    },
    {
      "tipo": "Pag. débito",
      "data": "15/09/2023",
      "nome": "Grupo Casas Bahia",
      "valor": "450,00",
      "descricao": ""
    },
    {
      "tipo": "Pag. crédito",
      "data": "08/09/2023",
      "nome": "Auto Posto Cesar",
      "valor": "120,00",
      "descricao": ""
    },
    {
      "tipo": "Depósito",
      "data": "08/09/2023",
      "nome": "Mobile",
      "valor": "35,00",
      "descricao": ""
    },
    {
      "tipo": "Remuneração/salário",
      "data": "28/12/2023",
      "nome": "Amazon Services",
      "valor": "15,00",
      "descricao": ""
    },
    {
      "tipo": "Transferência enviada",
      "data": "25/11/2023",
      "nome": "Editora Democritus",
      "valor": "50,00",
      "descricao": "Pix"
    },
    {
      "tipo": "Transferência recebida",
      "data": "31/10/2023",
      "nome": "Roberto B",
      "valor": "47,00",
      "descricao": "Pix"
    },
    {
      "tipo": "Pag. débito",
      "data": "15/09/2023",
      "nome": "Grupo Casas Bahia",
      "valor": "450,00",
      "descricao": ""
    },
    {
      "tipo": "Pag. crédito",
      "data": "08/09/2023",
      "nome": "Auto Posto Cesar",
      "valor": "120,00",
      "descricao": ""
    },
    {
      "tipo": "Depósito",
      "data": "08/09/2023",
      "nome": "Mobile",
      "valor": "35,00",
      "descricao": ""
    },
    {
      "tipo": "Remuneração/salário",
      "data": "28/12/2023",
      "nome": "Amazon Services",
      "valor": "15,00",
      "descricao": ""
    },
    {
      "tipo": "Transferência enviada",
      "data": "25/11/2023",
      "nome": "Editora Democritus",
      "valor": "50,00",
      "descricao": "Pix"
    },
    {
      "tipo": "Pag. crédito",
      "data": "08/09/2023",
      "nome": "Auto Posto Cesar",
      "valor": "120,00",
      "descricao": ""
    },
    {
      "tipo": "Depósito",
      "data": "08/09/2023",
      "nome": "Mobile",
      "valor": "35,00",
      "descricao": ""
    },
  ]

}
