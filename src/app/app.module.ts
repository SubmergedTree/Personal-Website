import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {routes} from './app.routes';
import {ProjectsComponent} from './projects.component';
import {HomeComponent} from './home.component';


@NgModule({
  imports:[
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  declarations:[
    AppComponent,
    HomeComponent,
    ProjectsComponent,
  ],
  providers:[],
  bootstrap: [AppComponent]
})
export class AppModule {}
