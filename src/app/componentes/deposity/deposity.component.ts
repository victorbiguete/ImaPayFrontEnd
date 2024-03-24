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
import { LocalStorageService } from '../../services/localStorage/local-storage.service';
import { HttpTransactionsService } from '../../services/httpTransactions/http-transactions.service';
import { LoggedUser } from '../../types/loggedUser';

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
  public loggedUser?: LoggedUser;

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
    private _loginService: LoginService,
    private _transactionsService: HttpTransactionsService
  ) {
    this.loggedUser = this._loginService.getLoggedUser();
  }

  ngOnInit() {
    this.deposityForm.reset();

    this.deposityForm
      .get('userName')
      ?.setValue(this.loggedUser?.name ?? 'not set');
    this.deposityForm.get('userName')?.disable();
    this.deposityForm
      .get('userEmail')
      ?.setValue(this.loggedUser?.cpf ?? 'not set');
    this.deposityForm.get('userEmail')?.disable();
    this.deposityForm.get('amount')?.setValue(this.amount);
  }

  submit() {
    if (this.deposityForm.invalid) {
      this._alertHandler.setAlert(
        AlertType.DANGER,
        'Preencha todos os campos corretamente!'
      );
      this.ngOnInit();
      return;
    }

    this._transactionsService
      .deposit(
        this.loggedUser?.cpf!,
        this.deposityForm.get('amount')?.value!,
        this.deposityForm.get('type')?.value!
      )
      .subscribe(
        (response) => {
          this._alertHandler.setAlert(
            AlertType.SUCCESS,
            'Deposito realizado com sucesso!'
          );

          this.loggedUser!.bankAccount.balance =
            (this.loggedUser?.bankAccount.balance ?? 0) +
            this.deposityForm.get('amount')?.value!;

          this._loginService.setLoggedUser(this.loggedUser!);
          this._router.navigate(['/home']);
        },
        (error) => {
          this._alertHandler.setAlert(
            AlertType.DANGER,
            'Erro ao realizar deposito!'
          );
        }
      );
  }
}
