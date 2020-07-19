import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'index', component: AppComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes), CommonModule ],
  exports: [ RouterModule ]
}) export class AppRoutingModule { }
