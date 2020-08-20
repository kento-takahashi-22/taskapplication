import { Component, OnInit } from '@angular/core';

import { TaskService } from '../task.service';
import { Task } from '../tasks';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  tasks: Task[];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.getTasks();
    console.log('task working!');
  }

  getTasks(): void{
    this.tasks = this.taskService.getTasks()
  }

  done(task): void{
    task.isDone = true;
  }

}
