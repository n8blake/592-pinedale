import { TestBed } from '@angular/core/testing';

import { DrinkListResolverService } from './drink-list-resolver.service';

describe('DrinkListResolverService', () => {
  let service: DrinkListResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DrinkListResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
