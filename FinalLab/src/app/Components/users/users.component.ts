import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: [
  ]
})
export class UsersComponent implements OnInit {

  constructor(private myService:UsersService , private router:Router) { }

  users;
  ngOnInit(): void {
    this.getusers();
  }
  getusers(){
    this.myService.getAllUsers().subscribe(
      (res)=>{this.users = res.body;},
      (err)=>{console.log(err);}
      );
  }

  delFunc(id){
    this.myService.DeleteUserById(id).subscribe();
    this.getusers();
  }
}
