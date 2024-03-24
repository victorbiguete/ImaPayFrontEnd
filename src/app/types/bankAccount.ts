import { AccountStatus } from './AccountStatus';
import { Transaction } from './transaction';

export class BankAccount {
  public id: number = 0;
  public balance: number = 0;
  public status: AccountStatus = AccountStatus.Active;
  public transactions: Transaction[] = [];
}
