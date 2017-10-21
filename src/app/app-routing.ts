import { Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { UserComponent } from './user/user/user.component';
import { AdminComponent } from './admin/admin/admin.component';
import { LoginComponent } from './login/login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found/page-not-found.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { GroupComponent } from './group/group/group.component';
import { GroupProfileComponent } from './group/group-profile/group-profile.component';

export const AppRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'user', component: UserComponent },
  { path: 'user/:id', component: UserProfileComponent },
  { path: 'group', component: GroupComponent },
  { path: 'group/:id', component: GroupProfileComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];
