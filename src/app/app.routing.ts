import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component'
// import { AuthService } from './login/auth.service'


const Routes: Routes = [
  {
    path: '', component: LoginComponent
  },
  {
    path: 'home', component: DashboardComponent
  }
]


@NgModule({
  imports: [RouterModule.forRoot(Routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
  // constructor (private authService: AuthService) {
  //   this.authService.usuarioAutenticado
  // }
 }