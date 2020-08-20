import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { DoneTasksComponent } from './done-tasks/done-tasks.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {path: '', redirectTo:'/tasks', pathMatch:'full'}, 
  {path: 'tasks', component: TasksComponent},
  {path: 'donetasks', component: DoneTasksComponent},
  {path: 'detail/:taskId', component: DetailsComponent},
  {path: 'detail', component: DetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
