import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomepageComponent } from './components/view/welcomepage/welcomepage.component';
import { CharacterComponent } from './components/common/character/character.component';
import { MenuComponent } from './components/view/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomepageComponent,
    CharacterComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
