import { Component, OnInit } from '@angular/core';
import {Task} from '../task/task';
import { TASKS_WAITING, TASKS_IN_PROGRESS, TASKS_FINISHED } from '../task/task-mock';
import {AppComponent} from '../app.component';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  selectedTask : Task;

  tasksWaiting : Task[];

  tasksInProgress : Task [];

  tasksFinished : Task [];

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.getTaskWaiting();
    this.getTaskInProgress();
    this.getTasksFinished();
  }

  getTaskWaiting() : void{
    this.taskService.getTasksWaiting().subscribe(tasksWaiting => this.tasksWaiting = tasksWaiting);
  }

  getTaskInProgress() : void {
    this.tasksInProgress = this.taskService.getTasksInProgress();
  }

  getTasksFinished() : void {
    this.tasksFinished = this.taskService.getTasksFinished();
  }

  onSelect(task : Task){
    this.selectedTask = task;
  }

  addProgress(task : Task) : void{
    this.tasksInProgress.push(task);
  }


}
