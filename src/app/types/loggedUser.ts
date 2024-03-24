import { Adress } from './adress';
import { BankAccount } from './bankAccount';

export class LoggedUser {
  public id: number = 0;
  public cpf: string = '';
  public name: string = '';
  public email: string = '';
  public phoneNumber: string = '';
  public bornDate: Date = new Date();
  public adress: Adress = new Adress();
  public bankAccount: BankAccount = new BankAccount();
}
