import { Component, OnInit } from '@angular/core';
import { User } from '../../user/models/user.model';
import { UserService } from 'src/app/services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit{
  users:User[] = []

  constructor( private userService: UserService, private router: Router) {}


  ngOnInit(): void {
    this.users = this.userService.getUsers();
    console.log(this.users)
  }
  adduser(){
    this.router.navigate([`/home/user/new`]);
  }

}
