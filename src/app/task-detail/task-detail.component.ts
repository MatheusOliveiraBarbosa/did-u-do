import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Task } from '../task/task';
import { TaskService } from '../task.service';
import { TasksComponent } from '../tasks/tasks.component';



@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {

  @Input() task : Task;
  @Input() tasksComponent : TasksComponent;
  

  constructor(
    private route : ActivatedRoute,
    private taskService : TaskService,
    private location : Location
    ) {}

  ngOnInit() { 
  }

  goBack() : void{
    this.location.back();
  }

  saveTask(task: Task) : void{
    this.tasksComponent.saveTask(task);
  }

  cancel() : void {
    this.tasksComponent.cancel();
  }

 
}
