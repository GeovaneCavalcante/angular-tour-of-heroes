import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { HeroDetailComponentComponent } from './hero-detail-component/hero-detail-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponentComponent
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
