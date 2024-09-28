import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskCrudService } from 'src/app/services/task/task-crud.service';
import { Task } from '../../models/task.model';
import { UserService } from 'src/app/services/user/user.service';
import { User } from 'src/app/modules/users/user/models/user.model';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {
  taskId: number = 0;
  task:Task
  user:User[]
  constructor(private routerRed: Router,private route: ActivatedRoute, private taskService:TaskCrudService, private userService: UserService, private router:Router) {}

  ngOnInit() {
    this.taskId = +this.route.snapshot.paramMap.get('id');
    this.task = this.taskService.getTasksById(this.taskId)
    if (!this.task) {
      this.routerRed.navigate([`/home/tasks`]);
    }
    this.user = this.userService.getUsersByIds(this.task.userId)
    console.log(this.task)
    console.log(this.user)
  }
  completedTask(task:Task){
    const data: Partial<Task> = {
      completed: true
    }
    this.taskService.updateTask(task.id,data)
    this.router.navigate([`/home/tasks`]);
  }

  closeTaskDetail(){
    this.router.navigate([`/home/tasks`]);
  }

}
