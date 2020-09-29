import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { LayoutModule } from '@angular/cdk/layout';
import { MatNativeDateModule } from '@angular/material/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MAT_DATE_LOCALE } from '@angular/material/core';

import {AppNasaComponent} from './app-nasa/app-nasa.component';
import {AppRoutingModule} from './app-routing.module';
import {AppNasaTableComponent} from './app-nasa-table/app-nasa-table.component';
import {AppNasaAsteroidsComponent} from './app-nasa-asteroids/app-nasa-asteroids.component';
import {HttpService} from './http-service/http.service';

@NgModule({
  declarations: [
    AppNasaTableComponent,
    AppNasaAsteroidsComponent,
    AppNasaComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDatepickerModule,
    LayoutModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
  ],
  providers: [HttpService, { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }],
  bootstrap: [AppNasaComponent]
})
export class AppModule {
}
