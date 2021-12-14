import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersService } from './Services/users.service';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UsersComponent } from './Components/users/users.component';
import { UserDetailsComponent } from './Components/user-details/user-details.component';
import { UserItemComponent } from './Components/user-item/user-item.component';
import { AddNewUserComponent } from './Components/add-new-user/add-new-user.component';
import { RouterModule } from '@angular/router';
import { ErrorComponent } from './Components/error/error.component';
import { UserUpdateComponent } from './Components/user-update/user-update.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserDetailsComponent,
    UserItemComponent,
    AddNewUserComponent,
    ErrorComponent,
    UserUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
