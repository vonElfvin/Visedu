import { TestBed, inject } from '@angular/core/testing';

import { CompletedProblemService } from './completed-problem.service';

describe('CompletedProblemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompletedProblemService]
    });
  });

  it('should be created', inject([CompletedProblemService], (service: CompletedProblemService) => {
    expect(service).toBeTruthy();
  }));
});
