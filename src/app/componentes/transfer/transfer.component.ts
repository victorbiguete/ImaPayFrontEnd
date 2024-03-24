import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { FooterComponent } from '../footer/footer.component';
import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AlertHandlerService } from '../../services/alertHandler/alert-handler.service';
import { LocalStorageService } from '../../services/localStorage/local-storage.service';
import { LoginService } from '../../services/login/login.service';
import { AlertType } from '../../types/alert';
import { LoggedUser } from '../../types/loggedUser';
import { HttpClientsService } from '../../services/httpClients/http-clients.service';
import { HttpTransactionsService } from '../../services/httpTransactions/http-transactions.service';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-transfer',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MenuComponent, FooterComponent, CardComponent],
  templateUrl: './transfer.component.html',
  styleUrl: './transfer.component.css',
})
export class TransferComponent {
  imagemVisivel: boolean = true;
  transferForm = new FormGroup({
    amount: new FormControl(0, [Validators.required]),
    userName: new FormControl('', [Validators.required]),
    userEmail: new FormControl('', [Validators.required]),
    type: new FormControl('', [Validators.required]),
    emailTarget: new FormControl('', [Validators.required]),
    emailTargetConfirm: new FormControl('not set', [Validators.required]),
    nameTarget: new FormControl('not set', [Validators.required]),
    userPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });
  loggedUser?: LoggedUser;
  target?: LoggedUser;

  userAmount: number = 0;
  constructor(
    private _loginService: LoginService,
    private _router: Router,
    private _alertService: AlertHandlerService,
    private _localStorageService: LocalStorageService,
    private _clientsService: HttpClientsService,
    private _transactionsService: HttpTransactionsService
  ) {
    this.loggedUser = this._loginService.getLoggedUser();
  }

  trocarImagem() {
    this.imagemVisivel = !this.imagemVisivel;
  }
  ngOnInit() {
    this.transferForm.reset();

    this.transferForm
      .get('userName')
      ?.setValue(this.loggedUser?.name ?? 'not set');
    this.transferForm.get('userName')?.disable();
    this.transferForm
      .get('userEmail')
      ?.setValue(this.loggedUser?.cpf ?? 'not set');
    this.transferForm.get('userEmail')?.disable();
    this.userAmount = this.loggedUser!.bankAccount.balance ?? 0;

    this.transferForm.get('emailTargetConfirm')?.disable();
    this.transferForm.get('nameTarget');

    document.getElementById('first-part')!.style.display = 'block';
    document.getElementById('second-part')!.style.display = 'none';
  }

  continuar() {
    this._clientsService
      .getUser(this.transferForm.value.emailTarget as string)
      .subscribe(
        (response) => {
          this.target = response.content[0];
          if (this.target) {
            this.transferForm
              .get('emailTargetConfirm')
              ?.setValue(this.target.cpf);
            this.transferForm.get('emailTargetConfirm')?.disable();
            this.transferForm.get('nameTarget')?.setValue(this.target.name);
            this.transferForm.get('nameTarget')?.disable();
            document.getElementById('first-part')!.style.display = 'none';
            document.getElementById('second-part')!.style.display = 'block';
          }
        },
        (error) => {
          this._alertService.setAlert(
            AlertType.DANGER,
            'Usuário não encontrado!'
          );
          this.ngOnInit();
        }
      );
  }

  submit() {
    if (this.transferForm.invalid) {
      this._alertService.setAlert(
        AlertType.DANGER,
        'Preencha todos os campos!'
      );
      this.ngOnInit();
      return;
    }

    if (
      this.transferForm.get('amount')?.value! >
      (this.loggedUser!.bankAccount.balance ?? 0)
    ) {
      this._alertService.setAlert(AlertType.DANGER, 'Saldo insuficiente!');
      this.ngOnInit();
      return;
    }

    this._clientsService
      .login(
        this.loggedUser!.cpf,
        this.transferForm.get('userPassword')?.value!
      )
      .subscribe(
        (response) => {
          this._transactionsService
            .transfer(
              this.loggedUser?.cpf!,
              this.target?.cpf!,
              this.transferForm.get('amount')?.value!,
              this.transferForm.get('type')?.value!
            )
            .subscribe(
              (response) => {
                this._alertService.setAlert(
                  AlertType.SUCCESS,
                  'Transferencia efetuada com sucesso!'
                );
                this.loggedUser!.bankAccount.balance =
                  (this.loggedUser!.bankAccount.balance ?? 0) -
                  this.transferForm.get('amount')?.value!;

                this._loginService.setLoggedUser(this.loggedUser!);
                this._router.navigate(['/home']);
              },
              (error) => {
                this._alertService.setAlert(
                  AlertType.DANGER,
                  'Erro ao efetuar transferencia!'
                );
                this.ngOnInit();
                return;
              }
            );
        },
        (error) => {
          this._alertService.setAlert(AlertType.DANGER, 'Senha incorreta!');
          this.ngOnInit();
          return;
        }
      );
  }
}
