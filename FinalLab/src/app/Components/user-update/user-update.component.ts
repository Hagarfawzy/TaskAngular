import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styles: [
  ]
})
export class UserUpdateComponent implements OnInit {
  id;
  user;
  constructor(private myActivated:ActivatedRoute, private myService:UsersService ,private route:Router) {
    this.id=myActivated.snapshot.params.id;
  }

  ngOnInit(): void {
    console.log(this.id);
    this.myService.getUserById(this.id).subscribe(
      (success)=>{this.user=success ;},
      (err)=>{console.log(err)}
    );
  }

  Update(id,name , email , city , street){
      let user={
        name:name,
        email:email,
        Address:{
          city:city,
          street:street
        }
      }
      this.myService.UpdateUserById(id ,user).subscribe((next)=>this.route.navigate(["/users"]));
  }
}
