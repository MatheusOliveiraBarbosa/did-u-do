import { Task } from './task';

export const  TASKS_WAITING : Task[] = [
    { id : 1, name : "Task init", responsible : "Matheus", priority: 1 }
];

export const  TASKS_IN_PROGRESS : Task[] = [
    { id : 2, name : "Task Executing", responsible : "Matheus", priority: 2 }
];

export const  TASKS_FINISHED : Task[] = [
    { id : 3, name : "Task Finished", responsible : "Matheus", priority: 3 }
];