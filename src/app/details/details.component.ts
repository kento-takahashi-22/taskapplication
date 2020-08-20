import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormControl } from '@angular/forms';

import { Task } from '../tasks';
import { Category } from '../categories';
import { User } from '../users';

import { TaskService } from '../task.service';
import { CATEGORIES } from '../mock-tasks';
import { USERS } from '../mock-tasks';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  @Input() task: Task;

  categories: Category[]= CATEGORIES;
  users: User[]= USERS;


  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getTask();
  }

  getTask(): void {
    const taskId = +this.route.snapshot.paramMap.get('taskId');
    this.taskService.getTask(taskId)
      .subscribe(task => this.task = task)
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    
  }


}
