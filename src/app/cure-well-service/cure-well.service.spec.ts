import { TestBed } from '@angular/core/testing';

import { CureWellService } from './cure-well.service';

describe('CureWellService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CureWellService = TestBed.get(CureWellService);
    expect(service).toBeTruthy();
  });
});
