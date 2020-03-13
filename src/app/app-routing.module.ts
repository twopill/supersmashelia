import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomepageComponent } from './components/view/welcomepage/welcomepage.component';
import { MenuComponent } from './components/view/menu/menu.component'
import { BattleComponent } from './components/view/battle/battle.component';
import { TetsComponent } from './components/view/tets/tets.component';
import { TournamentComponent } from './components/view/tournament/tournament.component';


const routes: Routes = [

  { path: 'selectcharacter', component: MenuComponent},
  { path: 'torneo', component: TournamentComponent },
  { path: 'fight', component: BattleComponent },
  { path: 'tets', component: TetsComponent },
  { path: 'welcomepage', component: WelcomepageComponent},
  { path: '', redirectTo:'welcomepage', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
