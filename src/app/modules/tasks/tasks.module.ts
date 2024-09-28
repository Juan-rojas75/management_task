import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { TaskDetailsComponent } from './components/task-details/task-details.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { TaskListComponent } from './pages/task-list/task-list.component';
import { TaskFilterComponent } from './components/task-filter/task-filter.component';
import { BadgeComponent } from "../shared/badge/badge.component";
import { AddButtonComponent } from '../shared/add-button/add-button.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CloseButtonComponent } from "../shared/close-button/close-button.component";

@NgModule({
  declarations: [
    TaskListComponent,
    TaskItemComponent,
    TaskDetailsComponent,
    TaskFormComponent,
    TaskFilterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BadgeComponent,
    AddButtonComponent,
    CloseButtonComponent
],
  exports:[]
})
export class TasksModule { }
