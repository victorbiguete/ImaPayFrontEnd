import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormGroup,
  ReactiveFormsModule,
  FormControl,
  Validators,
} from '@angular/forms';
import { AlertHandlerService } from '../../services/alertHandler/alert-handler.service';
import { AlertType } from '../../types/alert';
import { Router } from '@angular/router';
import { MenuComponent } from '../menu/menu.component';
import { FooterComponent } from '../footer/footer.component';
import { LoginService } from '../../services/login/login.service';

@Component({
  selector: 'app-deposity',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MenuComponent, FooterComponent],
  templateUrl: './deposity.component.html',
  styleUrl: './deposity.component.css',
})
export class DeposityComponent {
  public userName: string = 'Meu Nome';
  public userEmail: string = 'meu@email.com';
  public amount: number = 0;

  public deposityForm = new FormGroup({
    amount: new FormControl(0, [Validators.required, Validators.min(1)]),
    userName: new FormControl(''),
    userEmail: new FormControl(''),
    type: new FormControl('', [Validators.required]),
    date: new FormControl(new Date()),
  });

  constructor(
    private _alertHandler: AlertHandlerService,
    private _router: Router,
    private _loginService: LoginService
  ) {}

  ngOnInit() {
    this.deposityForm
      .get('userName')
      ?.setValue(this._loginService.loggedUser.name);
    this.deposityForm.get('userName')?.disable();
    this.deposityForm
      .get('userEmail')
      ?.setValue(this._loginService.loggedUser.email);
    this.deposityForm.get('userEmail')?.disable();
    this.deposityForm.get('amount')?.setValue(this.amount);
  }

  submit() {
    if (this.deposityForm.valid) {
      this._alertHandler.setAlert(
        AlertType.SUCCESS,
        'Deposito realizado com sucesso!'
      );
      this._router.navigate(['/home']);
      // TODO Atualizar no banco de dados
    } else {
      this._alertHandler.setAlert(
        AlertType.DANGER,
        'Preencha todos os campos corretamente!'
      );
    }
  }
}
