import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {ToastrModule} from 'ngx-toastr';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {AddHeaderInterceptor} from './shared/jwt.interceptor';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    // Globals,
    // Title,
    {
      provide: HTTP_INTERCEPTORS, useClass: AddHeaderInterceptor, multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
