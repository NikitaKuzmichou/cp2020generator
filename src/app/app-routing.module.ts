import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';

import { CharacterComponent } from './character/character.component';

import { InProgressComponent } from './tmp/in-progress/in-progress.component';

const routes: Routes = [
  { path: 'index', component: AppComponent },

  { path: 'character', component: CharacterComponent},
  { path: 'in-progress', component: InProgressComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes), CommonModule ],
  exports: [ RouterModule ]
}) export class AppRoutingModule { }
