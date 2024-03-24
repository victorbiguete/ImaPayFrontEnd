import { Adress } from './adress';

export class User {
  name!: string;
  email!: string;
  password!: string;
  cpf!: string;
  phoneNumber!: string;
  bornDate!: string;
  adress!: Adress;
}
