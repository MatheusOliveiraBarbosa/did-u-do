import { Injectable } from '@angular/core';
import { Task } from './task/task';
import { TASKS_WAITING, TASKS_IN_PROGRESS, TASKS_FINISHED } from './task/task-mock';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class TaskService {
  
  constructor() { }


  getTasksWaiting() : Observable<Task[]> {
    return of (TASKS_WAITING);
  }

  getTasksInProgress() : Task[]{
    return TASKS_IN_PROGRESS;
  }

  getTasksFinished() : Task[]{
    return TASKS_FINISHED;
  }

}
