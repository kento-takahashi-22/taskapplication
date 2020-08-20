import { Injectable } from '@angular/core';
import { Task } from './tasks';
import { User } from './users';
import { Category } from './categories';

import { TASKS } from './mock-tasks';
import { Observable, of } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTasks(): Task[]{
    return TASKS;
  }

  getTask(taskId: number): Observable<Task>{
    return of(TASKS.find(task => task.taskId === taskId))
  }
}
