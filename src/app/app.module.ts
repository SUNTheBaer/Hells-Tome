import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewRunComponent } from './new-run/new-run.component';
import { HomeComponent } from './home/home.component';
import { BoonsComponent } from './boons/boons.component';

@NgModule({
  declarations: [
    AppComponent,
    NewRunComponent,
    HomeComponent,
    BoonsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
