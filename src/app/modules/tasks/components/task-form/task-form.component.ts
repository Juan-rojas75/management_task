import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Task } from '../../models/task.model';
import { User } from 'src/app/modules/users/user/models/user.model';
import { UserService } from 'src/app/services/user/user.service';
import { TaskCrudService } from 'src/app/services/task/task-crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  taskForm: FormGroup;
  users: User[] = [];

  constructor(private fb: FormBuilder, private userService: UserService, private taskService: TaskCrudService, private router: Router) {
    this.taskForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(5)]],
      dateEnd: ['', [Validators.required]],
      completed: [false],
      userId: [[], [Validators.required]],  // Cambiado a un arreglo
    });
  }

  ngOnInit(): void {
    this.users = this.userService.getUsers();
  }

  onSubmit() {
    if (this.taskForm.valid) {
      const task: Task = this.taskForm.value;
      this.taskService.createTask(task, task.userId);
      console.log('Formulario enviado:', task);
      this.router.navigate([`/home/tasks`]);
    } else {
      console.log('Formulario no válido');
    }
  }

  closeAddtask() {
    this.router.navigate([`/home/tasks`]);
  }
}
