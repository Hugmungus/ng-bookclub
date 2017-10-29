import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GroupComponent } from '../group/group.component';
import { GroupProfileComponent } from '../group-profile/group-profile.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'group', component: GroupComponent },
    { path: 'group/:groupId', component: GroupProfileComponent },
  ])],
  exports: [RouterModule]
})
export class GroupRoutingModule {}
