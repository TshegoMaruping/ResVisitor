import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedService } from './shared.service';

const routes: Routes = [

{path:'login',component:LoginComponent},

{path:'register',component:RegisterComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UserDashboardComponent,
    AdminDashboardComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  exports:[RouterModule],
  providers: [ SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }

