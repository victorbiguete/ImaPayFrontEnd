import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
  FormControl,
  Validators,
  FormGroup,
} from '@angular/forms';
import { MenuComponent } from '../menu/menu.component';
import { FooterComponent } from '../footer/footer.component';
import { LoginService } from '../../services/login/login.service';
import { Router } from '@angular/router';
import { AlertHandlerService } from '../../services/alertHandler/alert-handler.service';
import { AlertType } from '../../types/alert';
import { LocalStorageService } from '../../services/localStorage/local-storage.service';

@Component({
  selector: 'app-withdraw',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MenuComponent, FooterComponent],
  templateUrl: './withdraw.component.html',
  styleUrl: './withdraw.component.css',
})
export class WithdrawComponent {
  public withdrawForm = new FormGroup({
    amount: new FormControl(0, [Validators.required, Validators.min(1)]),
    userName: new FormControl(''),
    userEmail: new FormControl(''),
    type: new FormControl('', [Validators.required]),
    userPassword: new FormControl('', [
      Validators.required,
      // TODO: Adicionar validação de senha
      // Validators.minLength(8),
    ]),
    date: new FormControl(new Date()),
  });

  public userAmount: number = 0;

  public showModal: boolean = true;

  constructor(
    private _loginService: LoginService,
    private _router: Router,
    private _alertService: AlertHandlerService,
    private _localStorageService: LocalStorageService
  ) {}

  ngOnInit() {
    this.withdrawForm.reset();

    this.withdrawForm
      .get('userName')
      ?.setValue(this._loginService.loggedUser?.name ?? 'not set');
    this.withdrawForm.get('userName')?.disable();
    this.withdrawForm
      .get('userEmail')
      ?.setValue(this._loginService.loggedUser?.email ?? 'not set');
    this.withdrawForm.get('userEmail')?.disable();
    this.userAmount = this._loginService.loggedUser?.amount ?? 0;
  }

  submit() {
    if (this.withdrawForm.invalid) {
      this._alertService.setAlert(
        AlertType.DANGER,
        'Preencha todos os campos corretamente!'
      );
      this.ngOnInit();
      return;
    }

    if (
      this._loginService.loggedUser?.password !==
      this.withdrawForm.get('userPassword')?.value
    ) {
      this._alertService.setAlert(AlertType.DANGER, 'Senha incorreta!');
      this.ngOnInit();
      return;
    }

    if (
      this.withdrawForm.value.amount! >
      (this._loginService.loggedUser?.amount ?? 0)
    ) {
      this._alertService.setAlert(AlertType.DANGER, 'Saldo insuficiente!');
      this.ngOnInit();
      return;
    }

    this._loginService.loggedUser!.amount =
      (this._loginService.loggedUser?.amount ?? 0) -
      this.withdrawForm.get('amount')?.value!;

    this._localStorageService.updateOne(
      this._loginService.loggedUser!,
      this._loginService.loggedUser?.email as string
    );

    this._alertService.setAlert(
      AlertType.SUCCESS,
      'Saque efetuado com sucesso!'
    );

    this._router.navigate(['/home']);
  }
}
