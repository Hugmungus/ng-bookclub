import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupComponent } from './group/group.component';
import { GroupProfileComponent } from './group-profile/group-profile.component';
import { GroupRoutingModule } from './group-routing/group-routing.module';

@NgModule({
  imports: [
    CommonModule,
    GroupRoutingModule
  ],
  exports: [GroupComponent, GroupProfileComponent],
  declarations: [GroupComponent, GroupProfileComponent]
})
export class GroupModule { }
