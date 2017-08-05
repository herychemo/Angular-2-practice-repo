import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LOCALE_ID } from "@angular/core";

import { AppComponent } from './app.component';

import {CapitalizePipe} from './pipes/capitalize.pipe';
import { SecuredomPipe } from './pipes/securedom.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CapitalizePipe,
    SecuredomPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
      { provide:LOCALE_ID, useValue:"es" }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
