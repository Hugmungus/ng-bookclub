import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupComponent } from './group/group.component';
import { GroupProfileComponent } from './group-profile/group-profile.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [GroupComponent, GroupProfileComponent],
  declarations: [GroupComponent, GroupProfileComponent]
})
export class GroupModule { }
