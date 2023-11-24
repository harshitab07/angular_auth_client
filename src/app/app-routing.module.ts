import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { HomeGuard } from './home.guard';
import { LoginGuard } from './login.guard';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    canActivate: [LoginGuard]
  },
  { path: 'home',
    component: HomeComponent,
    canActivate: [HomeGuard]
  },
  {
    path: 'signup',
    component: SignupComponent,
    canActivate: [LoginGuard]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [HomeGuard, LoginGuard]
})
export class AppRoutingModule { }
