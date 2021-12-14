import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-add-new-user',
  templateUrl: './add-new-user.component.html',
  styles: [
  ]
})
export class AddNewUserComponent implements OnInit {

  constructor(private myService:UsersService ,private route:Router) { }

  ngOnInit(): void {
  }

  Add(name , email , city , street){
    let user={
      name:name,
      email:email,
      Address:{
        city:city,
        street:street
      }
    }
    // console.log(user);
    this.myService.AddNewUser(user).subscribe((next)=>this.route.navigate(["/users"]));
  }
}
