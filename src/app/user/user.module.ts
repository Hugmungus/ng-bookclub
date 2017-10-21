import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [UserComponent, UserProfileComponent],
  declarations: [UserComponent, UserProfileComponent]
})
export class UserModule { }
