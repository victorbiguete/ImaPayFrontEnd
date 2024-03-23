import { TestBed } from '@angular/core/testing';

import { HttpCepService } from './http-cep.service';

describe('HttpCepService', () => {
  let service: HttpCepService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpCepService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
