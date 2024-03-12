import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from 'src/app/state/counter.action';
import { CounterState } from 'src/app/state/counter.state';

@Component({
  selector: 'app-counter-btn',
  templateUrl: './counter-btn.component.html',
  styleUrls: ['./counter-btn.component.css']
})
export class CounterBtnComponent implements OnInit {

  constructor(
    private store:Store<{counter:CounterState}>
  ){}
  ngOnInit(): void {
    
  }

  onIncrement(){
    this.store.dispatch(increment());
  }
  onDecrement(){
    this.store.dispatch(decrement());
  }
  onReset(){
    this.store.dispatch(reset());
  }
}
