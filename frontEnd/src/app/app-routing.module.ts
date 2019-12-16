import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FansComponent } from './components/fans/fans.component';
import { TeamsComponent } from './components/teams/teams.component';
import { AddFanComponent } from './components/add-fan/add-fan.component';


const routes: Routes = [
  { path: 'fans', component: FansComponent},
  { path: 'fans/nuevo', component: AddFanComponent},
  { path: 'teams', component: TeamsComponent},
  { path: '', pathMatch: 'full', redirectTo: 'teams' },
  { path: '**', pathMatch: 'full', redirectTo: 'teams' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
