import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { AppComponent } from '../app.component';
import { PanelComponent } from './panel.component';
import { panelRoutes } from './routes/routes';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(panelRoutes)
  ],
  declarations: [PanelComponent]
})
export class PanelModule { }
