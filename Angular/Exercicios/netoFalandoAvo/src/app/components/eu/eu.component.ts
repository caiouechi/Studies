import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-eu',
  templateUrl: './eu.component.html',
  styleUrls: ['./eu.component.css']
})
export class EuComponent implements OnInit {
  @Output() gritaPapai: EventEmitter<string> = new EventEmitter();

  teste: string = "";

  constructor() { }

  ngOnInit() {
    this.teste = "lala";
  }

public chamaPapai(){
  console.log("chamando papai")
  this.gritaPapai.emit(this.teste);
}

}
