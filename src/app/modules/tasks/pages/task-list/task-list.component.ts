import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from '../../models/task.model';
import { User } from 'src/app/modules/users/user/models/user.model';
import { TaskCrudService } from 'src/app/services/task/task-crud.service';
import { UserService } from 'src/app/services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent {
  tasks: Task[] = [];
  users: User[] = [];
  addTask:Boolean = false
  selectedUserId: number | null = null;

  constructor(private taskService: TaskCrudService, private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.users = this.userService.getUsers();
    this.tasks = this.taskService.getTasks()
  }
  statusSelect(mensaje:string) {
    if (mensaje === "All") {
      this.tasks = this.taskService.getTasks()
    }
    else{
      const status = mensaje === "Completed" ? true : false
      this.tasks = this.taskService.getTaskByStatus(status)
    }
  }
  addtask(){
    this.router.navigate([`/home/tasks/new`]);
  }

}
