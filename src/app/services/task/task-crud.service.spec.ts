import { TestBed } from '@angular/core/testing';

import { TaskCrudService } from './task-crud.service';

describe('TaskCrudService', () => {
  let service: TaskCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
