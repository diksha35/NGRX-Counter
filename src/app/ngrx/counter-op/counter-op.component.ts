import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { CounterState } from 'src/app/state/counter.state';

@Component({
  selector: 'app-counter-op',
  templateUrl: './counter-op.component.html',
  styleUrls: ['./counter-op.component.css'],
})
export class CounterOpComponent implements OnInit, OnDestroy {
  counter: number | undefined;
  counterSubscription!: Subscription;
  counter$: Observable<CounterState> | undefined;
  constructor(
    private store: Store<{
      counter: CounterState;
    }>
  ) {}

  ngOnInit(): void {
    // Via Observables
    this.counter$ = this.store.select('counter');
    //Via Subscription
    /* this.counterSubscription= this.store.select('counter').subscribe((data)=>{
     this.counter=data.counter;
  })*/
  }
  /*unsubscribing the subscription*/

  ngOnDestroy(): void {
    /*if(this.counterSubscription){
    this.counterSubscription.unsubscribe();
  }
  */
  }
}
