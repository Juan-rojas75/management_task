import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from '../pages/users-list/users-list.component';
import { AddButtonComponent } from '../../shared/add-button/add-button.component';
import { UserFormComponent } from '../pages/user-form/user-form.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UsersListComponent,
    UserFormComponent
  ],
  imports: [
    AddButtonComponent,
    ReactiveFormsModule,
    CommonModule
  ]
})
export class UserModule { }
