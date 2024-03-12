import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter-component.component.html',
  styleUrls: ['./counter-component.component.css']
})
export class CounterComponentComponent implements OnInit {
counter:number=0;
ngOnInit():void{}

onIncrement(){
  this.counter ++;

}
onDecrement(){
  this.counter--;

}
onReset(){
  this.counter=0;

}

}
