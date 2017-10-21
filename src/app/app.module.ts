import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { AppRoutes } from './app-routing';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { UserModule } from './user/user.module';
import { GroupModule } from './group/group.module';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';
import { AdminModule } from './admin/admin.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HomeModule,
    LoginModule,
    UserModule,
    GroupModule,
    PageNotFoundModule,
    AdminModule,
    BrowserModule,
    RouterModule.forRoot(
      AppRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
