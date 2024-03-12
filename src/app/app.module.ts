import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterComponentComponent } from './input-output/counter-component/counter-component.component';
import { CounterOutputComponent } from './input-output/counter-output/counter-output.component';
import { CounterButtonsComponent } from './input-output/counter-buttons/counter-buttons.component';
import { AppRoutingModule } from './app-routing.module';
import { CounterComponent } from './ngrx/counter/counter.component';
import { HeaderComponent } from './header/header.component';
import { CounterBtnComponent } from './ngrx/counter-btn/counter-btn.component';
import { CounterOpComponent } from './ngrx/counter-op/counter-op.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './state/counter.reducer';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponentComponent,
    CounterOutputComponent,
    CounterButtonsComponent,
    CounterComponent,
    HeaderComponent,
    CounterBtnComponent,
    CounterOpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    StoreModule.forRoot({
      counter:counterReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
