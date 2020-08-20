import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormControl } from '@angular/forms';

import { Task } from '../tasks';
import { Category } from '../categories';
import { User } from '../users';

import { TaskService } from '../task.service';
import { TASKS } from '../mock-tasks';
import { CATEGORIES } from '../mock-tasks';
import { USERS } from '../mock-tasks';

@Component({
  selector: 'app-add-tasks',
  templateUrl: './add-tasks.component.html',
  styleUrls: ['./add-tasks.component.scss']
})
export class AddTasksComponent implements OnInit {
  @Input() task: Task;
  newTask:Task[];

  categories: Category[]= CATEGORIES;
  users: User[]= USERS;

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService,
    private location: Location
  ) { }

  ngOnInit(): void {

  }


  add(): void {

  }

}
