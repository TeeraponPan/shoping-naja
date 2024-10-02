import { TestBed } from '@angular/core/testing';

import { ShoppingMallService } from './shopping-mall.service';

describe('ShoppingMallService', () => {
  let service: ShoppingMallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShoppingMallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
