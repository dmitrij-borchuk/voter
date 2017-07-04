import { TestBed, inject } from '@angular/core/testing';

import { VotingsProviderService } from './votings-provider.service';

describe('VotingsProviderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VotingsProviderService]
    });
  });

  it('should ...', inject([VotingsProviderService], (service: VotingsProviderService) => {
    expect(service).toBeTruthy();
  }));
});
