import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './modules/layout/main-layout/main-layout.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './modules/layout/header/header.component';
import { TasksModule } from './modules/tasks/tasks.module';
import { SharedModule } from './modules/shared/shared.module';
import { UserModule } from './modules/users/user/user.module';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TasksModule,
    UserModule,
    SharedModule,
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
