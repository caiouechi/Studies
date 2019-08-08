import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pai',
  templateUrl: './pai.component.html',
  styleUrls: ['./pai.component.css']
})
export class PaiComponent implements OnInit {
valorVindoDoFilho:string = "";
@Output() chamandoComponenteAvo: EventEmitter<string> = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }


  public filhoFalandoComPai(parametro: string){
    this.valorVindoDoFilho = parametro;
    console.log("pai imprimindo " + parametro);

    this.chamandoComponenteAvo.emit(parametro);
    console.log("chamou avo ");
  }
}
