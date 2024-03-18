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
    date: new FormControl(new Date()),
  });

  public userAmount: number = 0;

  public showModal: boolean = true;

  constructor(
    private _loginService: LoginService,
    private _router: Router,
    private _alertHandler: AlertHandlerService,
    private _localStorageService: LocalStorageService
  ) {}

  ngOnInit() {
    this.withdrawForm
      .get('userName')
      ?.setValue(this._loginService.loggedUser!.name);
    this.withdrawForm.get('userName')?.disable();
    this.withdrawForm
      .get('userEmail')
      ?.setValue(this._loginService.loggedUser!.email);
    this.withdrawForm.get('userEmail')?.disable();
    this.userAmount = this._loginService.loggedUser?.amount ?? 0;
  }

  submit() {
    if (this.withdrawForm.valid) {
      if (
        this.withdrawForm.value.amount! <=
        (this._loginService.loggedUser?.amount ?? 0)
      ) {
        this._alertHandler.setAlert(
          AlertType.SUCCESS,
          'Saque efetuado com sucesso!'
        );
        if (this._loginService.loggedUser!.amount) {
          this._loginService.loggedUser!.amount -=
            this.withdrawForm.get('amount')?.value!;
        }

        let users = this._localStorageService.get();
        if (users?.length > 0) {
          users = users.map((user) => {
            if (user.email === this._loginService.loggedUser!.email) {
              user.amount = this._loginService.loggedUser!.amount;
            }
            return user;
          });
          this._localStorageService.set(users);
        }

        this._router.navigate(['/home']);
      } else {
        this._alertHandler.setAlert(AlertType.DANGER, 'Saldo insuficiente!');
      }
    } else {
      this._alertHandler.setAlert(
        AlertType.DANGER,
        'Preencha todos os campos corretamente!'
      );
    }
  }

  withdraw() {}
}
