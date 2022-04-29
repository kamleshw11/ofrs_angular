import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { FlightComponent } from './components/flight/flight.component';

import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { UserSearchFlightComponent } from './components/user-search-flight/user-search-flight.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { AddFlightComponent } from './components/add-flight/add-flight.component';

import { MAT_DATE_FORMATS } from '@angular/material/core';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatDatepickerModule } from '@angular/material/datepicker';

const MY_FORMATS = {
  parse: {
    dateInput: 'YYYY-MM-DD',
  },
  display: {
    dateInput: 'YYYY-MM-DD',
    monthYearLabel: 'MM YYYY',
    dateA11yLabel: 'YYYY-MM-DD',
    monthYearA11yLabel: 'MM YYYY',
  },
};
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FlightComponent,    
    UserSearchFlightComponent,
    AddFlightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    MatDatepickerModule,
    MatMomentDateModule
  ],
  
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS }
 ],
  bootstrap: [AppComponent]
})
export class AppModule { }
