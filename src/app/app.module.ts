import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomepageComponent } from './components/view/welcomepage/welcomepage.component';
import { CharacterComponent } from './components/common/character/character.component';
import { MenuComponent } from './components/view/menu/menu.component';
import { BattleComponent } from './components/view/battle/battle.component';
import { BattleService } from './service/battle.service';
import { SmashService } from './service/smash.service';

@NgModule({
  declarations: [
    AppComponent,
    WelcomepageComponent,
    CharacterComponent,
    MenuComponent,
    BattleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    BattleService,
    SmashService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
