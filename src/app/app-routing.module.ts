import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TasksComponent } from './tasks/tasks.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';


const routes : Routes = [
  { path : "tasks", component: TasksComponent},
  { path : '', redirectTo: '/tasks', pathMatch: 'full'},
  { path : "detail/:id", component: TaskDetailComponent}
];


@NgModule({
  exports:[RouterModule],
  imports: [ RouterModule.forRoot(routes) ],

})
export class AppRoutingModule { }
