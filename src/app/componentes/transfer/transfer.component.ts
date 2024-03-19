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

@Component({
  selector: 'app-transfer',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MenuComponent, FooterComponent],
  templateUrl: './transfer.component.html',
  styleUrl: './transfer.component.css',
})
export class TransferComponent {
  transferForm = new FormGroup({
    amount: new FormControl(0, [Validators.required]),
    userName: new FormControl('', [Validators.required]),
    userEmail: new FormControl('', [Validators.required]),
    type: new FormControl('', [Validators.required]),
    emailTarget: new FormControl('', [Validators.required, Validators.email]),
    emailTargetConfirm: new FormControl('not set', [Validators.required]),
    nameTarget: new FormControl('not set', [Validators.required]),
    userPassword: new FormControl('', [
      Validators.required,
      // TODO: Adicionar validação de senha
      // Validators.minLength(8),
    ]),
  });

  target?: { name: string; email: string; password: string; amount?: number };

  userAmount: number = 0;
  constructor(
    private _loginService: LoginService,
    private _router: Router,
    private _alertService: AlertHandlerService,
    private _localStorageService: LocalStorageService
  ) {}

  ngOnInit() {
    this.transferForm.reset();

    this.transferForm
      .get('userName')
      ?.setValue(this._loginService.loggedUser?.name ?? 'not set');
    this.transferForm.get('userName')?.disable();
    this.transferForm
      .get('userEmail')
      ?.setValue(this._loginService.loggedUser?.email ?? 'not set');
    this.transferForm.get('userEmail')?.disable();
    this.userAmount = this._loginService.loggedUser?.amount ?? 0;

    this.transferForm.get('emailTargetConfirm')?.disable();
    this.transferForm.get('nameTarget')?.disable();

    document.getElementById('first-part')!.style.display = 'block';
    document.getElementById('second-part')!.style.display = 'none';
  }

  continuar() {
    this.target = this._localStorageService.getOne(
      this.transferForm.value.emailTarget as string
    );
    if (this.target) {
      this.transferForm.get('emailTargetConfirm')?.setValue(this.target.email);
      this.transferForm.get('emailTargetConfirm')?.disable();
      this.transferForm.get('nameTarget')?.setValue(this.target.name);
      this.transferForm.get('nameTarget')?.disable();
      document.getElementById('first-part')!.style.display = 'none';
      document.getElementById('second-part')!.style.display = 'block';
    }
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
      this._loginService.loggedUser?.password !==
      this.transferForm.get('userPassword')?.value
    ) {
      this._alertService.setAlert(AlertType.DANGER, 'Senha incorreta!');
      this.ngOnInit();
      return;
    }

    if (
      this.transferForm.get('amount')?.value! >
      (this._loginService.loggedUser?.amount ?? 0)
    ) {
      this._alertService.setAlert(AlertType.DANGER, 'Saldo insuficiente!');
      this.ngOnInit();
      return;
    }

    this._loginService.loggedUser!.amount =
      (this._loginService.loggedUser?.amount ?? 0) -
      this.transferForm.get('amount')?.value!;

    this._localStorageService.updateOne(
      this._loginService.loggedUser!,
      this._loginService.loggedUser?.email as string
    );

    this.target!.amount =
      (this.target?.amount ?? 0) + this.transferForm.get('amount')?.value!;

    this._localStorageService.updateOne(
      this.target!,
      this.target?.email as string
    );

    this._alertService.setAlert(
      AlertType.SUCCESS,
      'Transferencia efetuada com sucesso!'
    );

    this._router.navigate(['/home']);
  }
}
