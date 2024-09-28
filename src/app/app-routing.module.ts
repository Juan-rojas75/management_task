import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './modules/tasks/pages/task-list/task-list.component';
import { TaskFormComponent } from './modules/tasks/components/task-form/task-form.component';
import { TaskDetailsComponent } from './modules/tasks/components/task-details/task-details.component';
import { MainLayoutComponent } from './modules/layout/main-layout/main-layout.component';
import { UsersListComponent } from './modules/users/pages/users-list/users-list.component';
import { UserFormComponent } from './modules/users/pages/user-form/user-form.component';

const routes: Routes = [
  {
    path: 'home',
    component: MainLayoutComponent,
    children: [
      { path: 'users', component: UsersListComponent },
      { path: 'user/new', component: UserFormComponent },
      { path: 'tasks', component: TaskListComponent },
      { path: 'tasks/new', component: TaskFormComponent },
      { path: 'tasks/:id/view', component: TaskDetailsComponent },
      { path: 'tasks/:id/edit', component: TaskDetailsComponent },
      { path: '', redirectTo: 'home/tasks', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
