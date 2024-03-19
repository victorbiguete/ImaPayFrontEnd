import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { FormButtonComponent } from '../form-button/form-button.component';
import { LocalStorageService } from '../../services/localStorage/local-storage.service';
import { HttpCpfService } from '../../services/httpCpf/http-cpf.service';
import { Adress } from '../../types/adress';
import { AlertHandlerService } from '../../services/alertHandler/alert-handler.service';
import { AlertType } from '../../types/alert';

@Component({
  selector: 'app-form-sign-up',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    ReactiveFormsModule,
    FormButtonComponent,
  ],
  templateUrl: './form-sign-up.component.html',
  styleUrl: './form-sign-up.component.css',
})
export class FormSignUpComponent {
  userEmail = new FormControl('');
  userName = new FormControl('');
  userPassword = new FormControl('');
  userConfirmPassword = new FormControl('');
  userCpfCnpj = new FormControl('');
  userPhoneNumber = new FormControl('');
  userBornDate = new FormControl('');
  userZipCode = new FormControl('');
  userStreet = new FormControl('');
  userHouseNumber = new FormControl('');
  userNeighborhood = new FormControl('');
  userCity = new FormControl('');
  userUF = new FormControl('');

  cadastroForm!: FormGroup;

  yearOlder = new Date().getFullYear() - 100;
  yearNewer = new Date().getFullYear() - 10;

  constructor(
    private localStorageService: LocalStorageService,
    private router: Router,
    private httpCep: HttpCpfService,
    private alertHandler: AlertHandlerService
  ) {
    this.cadastroForm = new FormGroup(
      {
        userEmail: new FormControl(this.userEmail.value, [
          Validators.email,
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(50),
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ]),
        userName: new FormControl(this.userName.value, [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(80),
          Validators.pattern('[a-zA-Z ]*'),
        ]),
        password: new FormControl(this.userPassword.value, [
          Validators.required,
          Validators.minLength(8),
        ]),
        passwordConfirmation: new FormControl(this.userConfirmPassword.value, [
          Validators.required,
          Validators.minLength(8),
        ]),
        userCpfCnpj: new FormControl(this.userCpfCnpj.value, [
          Validators.required,
          Validators.minLength(11),
          Validators.maxLength(14),
          Validators.pattern('[0-9]*'),
        ]),
        userPhoneNumber: new FormControl(this.userPhoneNumber.value, [
          Validators.required,
          Validators.minLength(11),
          Validators.maxLength(11), // 11 digitos
          Validators.pattern('[0-9]*'),
        ]),
        userNeighborhood: new FormControl(this.userNeighborhood.value, [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(80),
          Validators.pattern('[a-zA-Z ]*'),
        ]),
        userBornDate: new FormControl(this.userBornDate.value, [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(10),
        ]),
        userZipCode: new FormControl(this.userZipCode.value, [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(8),
          Validators.pattern('[0-9]*'),
        ]),
        userStreet: new FormControl(this.userStreet.value, [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(80),
          Validators.pattern('[a-zA-Z ]*'),
        ]),
        userHouseNumber: new FormControl(this.userHouseNumber.value, [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(5),
          Validators.pattern('[0-9]*'),
        ]),
        userCity: new FormControl(this.userCity.value, [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(80),
          Validators.pattern('[a-zA-Z ]*'),
        ]),
        userUF: new FormControl(this.userUF.value, [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(2),
          Validators.pattern('[a-zA-Z]*'),
        ]),
      },
      {
        validators: this.passwordMatch,
      }
    );
  }

  ngOnInit() {
    this.cadastroForm.get('password')?.valueChanges.subscribe(() => {
      this.cadastroForm.get('passwordConfirmation')?.updateValueAndValidity();
    });

    document.getElementById('section-first')!.style.display = 'block';
    document.getElementById('section-second')!.style.display = 'none';
    document.getElementById('section-third')!.style.display = 'none';
  }

  passwordMatch(control: AbstractControl) {
    return control.get('password')?.value ===
      control.get('passwordConfirmation')?.value
      ? null
      : { mismatch: true };
  }

  firstContinue() {
    document.getElementById('section-first')!.style.display = 'none';
    document.getElementById('section-second')!.style.display = 'block';
  }

  secondContinue() {
    document.getElementById('section-second')!.style.display = 'none';
    document.getElementById('section-third')!.style.display = 'block';

    this.httpCep.get(this.cadastroForm.get('userZipCode')?.value).subscribe(
      (response: Adress) => {
        this.cadastroForm.get('userStreet')?.setValue(response?.street);
        this.cadastroForm.get('userStreet')?.disable();
        this.cadastroForm
          .get('userNeighborhood')
          ?.setValue(response?.neighborhood);
        this.cadastroForm.get('userNeighborhood')?.disable();
        this.cadastroForm.get('userCity')?.setValue(response?.city);
        this.cadastroForm.get('userCity')?.disable();
        this.cadastroForm.get('userUF')?.setValue(response?.state);
        this.cadastroForm.get('userUF')?.disable();
        console.log(response);
      },
      (error) => {
        console.log(error);
        this.cadastroForm.get('userStreet')?.reset();
        this.cadastroForm.get('neighborhood')?.reset();
        this.cadastroForm.get('userCity')?.reset();
        this.cadastroForm.get('userUF')?.reset();
      }
    );
  }

  onSubmit(e: any) {
    // TODO adaptar para o banco e validar
    e.preventDefault();
    if (this.cadastroForm.invalid) {
      this.cadastroForm.get('password')?.setErrors({ require: true });
      this.cadastroForm
        .get('passwordConfirmation')
        ?.setErrors({ require: true });
      return;
    }

    const users = this.localStorageService.get();
    if (users?.length > 0) {
      if (
        users.some((user) => user.email === this.cadastroForm.value.userEmail)
      ) {
        this.ngOnInit();
        this.cadastroForm.get('userEmail')?.setErrors({ userExists: true });
        this.cadastroForm.get('password')?.reset();
        this.cadastroForm.get('passwordConfirmation')?.reset();
        return; // UserEmail already exists
      }
      users.push({
        name: this.cadastroForm.value.userName,
        email: this.cadastroForm.value.userEmail,
        password: this.cadastroForm.value.password,
        amount: 0,
      });
      this.localStorageService.set(users);
    } else {
      this.localStorageService.set([
        {
          name: this.cadastroForm.value.userName,
          email: this.cadastroForm.value.userEmail,
          password: this.cadastroForm.value.password,
          amount: 0,
        },
      ]);
    }
    this.cadastroForm.reset();
    this.alertHandler.setAlert(AlertType.SUCCESS, 'Bem vindo ao SimplifyPay!');
    this.router.navigate(['/home']);
  }
}
