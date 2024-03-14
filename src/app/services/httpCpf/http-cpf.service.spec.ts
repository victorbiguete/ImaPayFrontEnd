import { TestBed } from '@angular/core/testing';

import { HttpCpfService } from './http-cpf.service';

describe('HttpCpfService', () => {
  let service: HttpCpfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpCpfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
