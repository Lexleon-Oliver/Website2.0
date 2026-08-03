import { TestBed } from '@angular/core/testing';

import { AvailiableServicesService } from './availiable-services.service';

describe('AvailiableServicesService', () => {
  let service: AvailiableServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvailiableServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
