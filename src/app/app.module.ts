import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AppService } from './app.service';

import { InProgressComponent } from './tmp/in-progress/in-progress.component';
/**character components*/
import { NameComponent } from './character/name/name.component';
import { CharacteristicsComponent } from './character/characteristics/characteristics.component';
import { SkillsComponent } from './character/skills/skills.component';
import { CharacterComponent } from './character/character.component';
/**background*/
import { BackgroundComponent } from './character/background/background.component';
import { DressComponent } from './character/background/dress/dress.component';
import { EthnicComponent } from './character/background/ethnic/ethnic.component';
import { MotivationComponent } from './character/background/motivation/motivation.component';
import { FamilyComponent } from './character/background/family/family.component';
import { EventsComponent } from './character/background/events/events.component';

@NgModule({
  declarations: [
    AppComponent,

    InProgressComponent,

    NameComponent,
    CharacteristicsComponent,
    SkillsComponent,
    CharacterComponent,
    BackgroundComponent,
    DressComponent,
    EthnicComponent,
    MotivationComponent,
    FamilyComponent,
    EventsComponent,

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
    AppService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
