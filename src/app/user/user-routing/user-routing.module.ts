import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserComponent } from '../user/user.component';
import { UserProfileComponent } from '../user-profile/user-profile.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'user', component: UserComponent },
    { path: 'user/:userId', component: UserProfileComponent },
  ])],
  exports: [RouterModule]
})
export class UserRoutingModule {}
