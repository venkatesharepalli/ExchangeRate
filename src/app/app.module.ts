import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { AppRoutingModule,  routingComponents} from './app-routing.module';

import {RouterModule, Routes} from "@angular/router";
import {CustomMaterialModule} from "./core/material.module";
import {SharedModule} from "./shared/shared.module";
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';
import { ExchangeRateApiService } from './core/services/exchange-rate-api.service';



@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ChartsModule,
    AppRoutingModule,
    CustomMaterialModule,
    SharedModule
  ],
  providers: [ExchangeRateApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
