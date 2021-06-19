import { TestBed } from '@angular/core/testing';

import { FizbazService } from './fizbaz.service';

describe('FizbazService', () => {
  let service: FizbazService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FizbazService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
