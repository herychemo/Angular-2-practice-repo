import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/** Extras */
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

/** Rutas */
import {APP_ROUTING} from "./app.routes";

/** Servicios */
import {SpotifyService} from "./services/spotify.service"


/** Components */
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { CarouselComponent } from './components/shared/carousel/carousel.component';
import { NophotoPipe } from './pipes/nophoto.pipe';
import { ArtistComponent } from './components/artist/artist.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SearchComponent,
    CarouselComponent,
    NophotoPipe,
    ArtistComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpModule,
    FormsModule
  ],
  providers: [
      SpotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
