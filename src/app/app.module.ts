import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AppService } from './app.service';

import { BackgroundComponent } from './character/background/background.component';
import { InProgressComponent } from './tmp/in-progress/in-progress.component';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundComponent,

    InProgressComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [
    { provide: AppService, deps: [] }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
