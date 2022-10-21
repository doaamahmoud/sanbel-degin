import { TestBed } from '@angular/core/testing';

import { IbranchService } from './ibranch.service';

describe('IbranchService', () => {
  let service: IbranchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IbranchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
