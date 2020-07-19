import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';

import {BackgroundComponent} from './character/background/background.component';

import {InProgressComponent} from './tmp/in-progress/in-progress.component';

const routes: Routes = [
  { path: 'index', component: AppComponent },

  { path: 'background', component: BackgroundComponent},
  { path: 'in-progress', component: InProgressComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes), CommonModule ],
  exports: [ RouterModule ]
}) export class AppRoutingModule { }
