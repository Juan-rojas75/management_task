import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../../models/task.model';
import { User } from 'src/app/modules/users/user/models/user.model';
import { UserService } from 'src/app/services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit{
  @Input() item:Task = {
    id: 1,
    title: "tarea",
    description: "description",
    dateEnd: new Date,
    completed: false,
    userId: [1]
  }
  user:User[] | undefined =[]

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.user = this.userService.getUsersByIds(this.item.userId);
  }

  navigateToEdit(taskId: number) {
    console.log(taskId)
    this.router.navigate([`/home/tasks/${taskId}/view`]);
  }




}
