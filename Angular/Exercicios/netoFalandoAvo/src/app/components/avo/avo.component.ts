import { Component, OnInit, ɵConsole } from '@angular/core';

@Component({
  selector: 'app-avo',
  templateUrl: './avo.component.html',
  styleUrls: ['./avo.component.css']
})
export class AvoComponent implements OnInit {
  propriedadeAvo: string = "";

  constructor() { }

  ngOnInit() {
  }


  public chamarMetodoAvo(parametro: string){
    this.propriedadeAvo = parametro;
    console.log("AVO SENDO CHAMADO")
  }
}
