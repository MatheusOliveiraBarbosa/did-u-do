import { Task } from './task';

export const  TASKS_WAITING : Task[] = [
    { id : 1, name : "Task init", responsible : "Matheus", priority: 1 },
    { id : 2, name : "Task Preparing", responsible : "Marcela", priority : 2 },
    { id : 3, name : "Task Executing", responsible : "Alysson", priority : 2 },
    { id : 4, name : "Task finish", responsible : "Melqui", priority : 3 }
  
];

export const  TASKS_IN_PROGRESS : Task[] = [
    { id : 5, name : "Task Executing", responsible : "Alysson", priority : 2 },
    { id : 6, name : "Task finish", responsible : "Melqui", priority : 3 },
];

export const  TASKS_FINISHED : Task[] = [
    { id : 7, name : "Task init", responsible : "Matheus", priority: 1 },
    { id : 8, name : "Task Preparing", responsible : "Marcela", priority : 2 },
];