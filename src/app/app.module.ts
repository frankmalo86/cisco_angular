import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {ContarClicksDirective} from './directivas/contar-click.directiva';
import {ResaltarDirective} from './directivas/resaltar.directiva';
import {FormsModule} from '@angular/forms';

import {AgmCoreModule} from '@agm/core';
import {CommonModule} from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    ResaltarDirective,
    ContarClicksDirective
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBYcQYDRk8EvO-vsT4-gXBCaQKA9S1h1OY'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
