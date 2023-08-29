import { TestBed } from '@angular/core/testing';

import { CRUDTaskListService } from './crud-task-list.service';

describe('CrudTaskListService', () => {
  let service: CRUDTaskListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CRUDTaskListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
