import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found/page-not-found.component';
import { ADMIN, BOOK, GROUP, HOME, USER } from './constants';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: HOME, loadChildren: 'app/home/home.module#HomeModule' },
  { path: USER, loadChildren: 'app/user/user.module#UserModule' },
  { path: GROUP, loadChildren: 'app/group/group.module#GroupModule' },
  { path: ADMIN, loadChildren: 'app/admin/admin.module#AdminModule' },
  { path: BOOK, loadChildren: 'app/book/book.module#BookModule' },
  { path: 'login', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
