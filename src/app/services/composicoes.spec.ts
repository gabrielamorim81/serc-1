import { TestBed } from '@angular/core/testing';

import { ComposicoesService } from './composicoes';

describe('Composicoes', () => {
  let service: ComposicoesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComposicoesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
