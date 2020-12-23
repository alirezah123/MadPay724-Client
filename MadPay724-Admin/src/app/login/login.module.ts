import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { loginRoutes } from './routes/routes';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(loginRoutes)
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
