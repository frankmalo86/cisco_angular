import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import { DetalleComponent } from './detalle/detalle.component';
import {ContarClicksDirective} from './directivas/contar-click.directiva';
import {ResaltarDirective} from './directivas/resaltar.directiva';
import {FormsModule} from '@angular/forms';

import {AgmCoreModule} from '@agm/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { CiscoComponent } from './cisco/cisco.component';

const appRouters: Routes = [
  {path: '', component: CiscoComponent},
  {path: 'cisco', component: CiscoComponent},
  {path: 'detalle/:id', component: DetalleComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    ResaltarDirective,
    ContarClicksDirective,
    DetalleComponent,
    CiscoComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBYcQYDRk8EvO-vsT4-gXBCaQKA9S1h1OY'
    }),
    RouterModule.forRoot(appRouters)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
