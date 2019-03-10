import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { WorkareaComponent } from './workarea/workarea.component';
import { NavbarVerticalComponent } from './navbar-vertical/navbar-vertical.component';
import { NavbarHorizontalComponent } from './navbar-horizontal/navbar-horizontal.component';


@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    WorkareaComponent,
    NavbarVerticalComponent,
    NavbarHorizontalComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
