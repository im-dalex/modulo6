import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FansComponent } from './components/fans/fans.component';
import { TeamsComponent } from './components/teams/teams.component';

//imports
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//services
import { DataService } from './services/data.service';
import { AddFanComponent } from './components/add-fan/add-fan.component';




@NgModule({
  declarations: [
    AppComponent,
    FansComponent,
    TeamsComponent,
    AddFanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
