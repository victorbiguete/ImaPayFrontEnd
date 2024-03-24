import { TransactionType } from './transactionType';

export class Transaction {
  public id: number = 0;
  public value: number = 0;
  public type: TransactionType = TransactionType.Deposit;
  public date: Date = new Date();
  public description?: string = '';
}
