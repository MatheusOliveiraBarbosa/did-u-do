import { Injectable } from '@angular/core';
import { Task } from './task/task';
import { TASKS_WAITING, TASKS_IN_PROGRESS, TASKS_FINISHED } from './task/task-mock';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import {HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class TaskService {

  private tasksURL = 'api/tasks';
  
  constructor(
    private http : HttpClient
  ) { }


  getTasksWaiting() : Observable<Task[]> {
    //return this.http.get<Task[]>(this.taskWaitingURL);
    return of (TASKS_WAITING);
  }

  getTasksInProgress() : Observable<Task[]>{
    return of (TASKS_IN_PROGRESS);
  }

  getTasksFinished() : Observable<Task[]>{
    return of (TASKS_FINISHED);
  }

}
