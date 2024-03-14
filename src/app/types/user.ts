import { Adress } from './adress';

export class User {
  name!: string;
  email!: string;
  password!: string;
  cpfCnpj!: string;
  phoneNumber!: string;
  bornDate!: string;
  adress!: Adress;
}

// userEmail = new FormControl('');
// userName = new FormControl('');
// userPassword = new FormControl('');
// userConfirmPassword = new FormControl('');
// userCpfCnpj = new FormControl('');
// userPhoneNumber = new FormControl('');
// userBornDate = new FormControl('');
// userZipCode = new FormControl('');
// userStreet = new FormControl('');
// userHouseNumber = new FormControl('');
// userNeighborhood = new FormControl('');
// userCity = new FormControl('');
// userUF = new FormControl('');
