import { TestBed } from '@angular/core/testing';

import { TokenHandlerService } from './token-handler.service';

describe('TokenHandlerService', () => {
  let service: TokenHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokenHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
