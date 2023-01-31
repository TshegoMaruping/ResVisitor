import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

const routes: Routes = [
  {path:'login',component : LoginComponent},
  {path:'register',component : RegisterComponent},
  {path:'user-dashboard',component : UserDashboardComponent},
  {path:'admin-dashboard',component : AdminDashboardComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
