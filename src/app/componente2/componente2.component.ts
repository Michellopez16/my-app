import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'componente2',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.css']
})
export class Componente2Component implements OnInit {


  varcomponente3:string = "desde componente2";
  edad: number;

  nombres:Array<string>;
  

  constructor() { 
    this.edad = 18;
    this.nombres = ['Michel','Daris','Fer','Ale cantante','Harly','Jeny','Venezolana','Paola','Dejada','Vanesa'];
    console.log("Componente2 constructor");
  }


  ngOnInit(): void {
    console.log("Componente2 ngOnInit");
  }


  aumentarEdad(){
  this.edad ++;
  }

  disminuirEdad(){
  this.edad -=1; 
  }

}
