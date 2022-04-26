import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightComponent } from './components/flight/flight.component';

const routes: Routes = [

  // { path: 'user-list', component:  UserComponent},
  { path: 'flight-list', component:  FlightComponent},
  // { path: 'passenger-log', component:  PassengerComponent},
  // { path: '', pathMatch: 'full', redirectTo: 'user-list' },
  // { path: '**', component: PathNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
