import { TestBed, inject } from '@angular/core/testing';

import { MarketcapService } from './marketcap.service';

describe('MarketcapService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MarketcapService]
    });
  });

  it('should be created', inject([MarketcapService], (service: MarketcapService) => {
    expect(service).toBeTruthy();
  }));
});
