import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private MyClient:HttpClient) { }

  BaseUrl="http://localhost:3000/Users";

  getAllUsers(){
    return this.MyClient.get(this.BaseUrl , {observe:"response"});
  }

  getUserById(id){
    // return this.MyClient.get(this.BaseUrl+"/"+id);
    console.log(id);
    console.log(`${this.BaseUrl}/${id}`);
    return this.MyClient.get(`${this.BaseUrl}/${id}`);

  }

  AddNewUser(user){
    return this.MyClient.post(this.BaseUrl , user);
  }

  DeleteUserById(id){
    return this.MyClient.delete(`${this.BaseUrl}/${id}`);
  }

  UpdateUserById(id,data){
    return this.MyClient.put(this.BaseUrl + '/' + id, data);
  }
}
