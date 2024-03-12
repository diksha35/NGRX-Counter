import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CounterComponentComponent } from './input-output/counter-component/counter-component.component';
import { CounterComponent } from './ngrx/counter/counter.component';
const routes: Routes = [
  {
    path: "",
 
    children: [
    
      {
        path:"",
        pathMatch:'full',
        redirectTo:'/in-op',
       },
      {
        path: 'in-op',
        component: CounterComponentComponent,
      },
      {
        path: 'ngrx',
        component: CounterComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
