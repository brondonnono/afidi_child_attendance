import { TestBed } from '@angular/core/testing';

import { DarkService } from './dark.service';

describe('DarkService', () => {
  let service: DarkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DarkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
