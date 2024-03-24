import { TestBed } from '@angular/core/testing';

import { HttpTransactionsService } from './http-transactions.service';

describe('HttpTransactionsService', () => {
  let service: HttpTransactionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpTransactionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
