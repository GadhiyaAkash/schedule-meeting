import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TimeslotsComponent} from './timeslots/timeslots.component';
import {TimeComponent} from './time/time.component';


const routes: Routes = [
      {
            path: 'timeslots',
            component: TimeslotsComponent,
            data: { title: 'Time Slot List' }
      },
      {
            path: 'time/:id',
            component: TimeComponent,
            data: { title: 'Time' }
      },
      { 
            path: '',
            redirectTo: '/timeslots',
            pathMatch: 'full'
      },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
