import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomepageComponent } from './components/view/welcomepage/welcomepage.component';
import { MenuComponent } from './components/view/menu/menu.component'

const routes: Routes = [

  { path: 'selectcharacter', component: MenuComponent},
  { path: 'welcomepage', component: WelcomepageComponent},
  { path: '', redirectTo:'welcomepage', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
