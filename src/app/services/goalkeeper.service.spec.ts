import { TestBed } from '@angular/core/testing';

import { GoalkeeperService } from './goalkeeper.service';

describe('GoalkeeperService', () => {
  let service: GoalkeeperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoalkeeperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
