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
    //this.tasksInProgress = this.taskService.getTasksInProgress();
    this.taskService.getTasksInProgress().subscribe(tasksInProgress => this.tasksInProgress = tasksInProgress);
  }

  getTasksFinished() : void {
    //this.tasksFinished = this.taskService.getTasksFinished();
    this.taskService.getTasksFinished().subscribe(tasksFinished => this.tasksFinished = tasksFinished);
  }

  onSelect(task : Task){
    this.selectedTask = task;
  }

  startTask(task : Task) : void{
    this.tasksInProgress.push(task);
    var i = this.tasksWaiting.indexOf(task);
    this.tasksWaiting.splice(i,1);
  }

  finishedTask(task : Task) : void {
    this.tasksFinished.push(task);
    var i = this.tasksInProgress.indexOf(task);
    this.tasksInProgress.splice(i,1);
  }

  removeTask(task : Task) : void {
    var i = this.tasksFinished.lastIndexOf(task);
    this.tasksFinished.splice(i,1);
  }


}
