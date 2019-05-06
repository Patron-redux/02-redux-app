// import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { MultiplicarAction, DividirAction } from '../contador.actions';

@Component({
  selector: 'app-hija',
  templateUrl: './hija.component.html',
  styles: []
})
export class HijaComponent implements OnInit {
  // @Input() contador:number;
  // @Output() cambioContador = new EventEmitter<number>();
  contador:number;
  constructor(private store:Store<AppState>) {
    this.store.select('contador').subscribe( contador =>{
      console.log(contador);
      this.contador = contador;
    })
  }

  ngOnInit() {
  }
  Multiplicar(){
    const accion = new MultiplicarAction(5);
    this.store.dispatch(accion);
    // this.contador *= 2;
    // this.cambioContador.emit(this.contador);
  }

  Dividir(){
    const accion = new DividirAction(2);
    this.store.dispatch(accion);
    // this.contador /= 2;
    // this.cambioContador.emit(this.contador);
  }
  resetNieto(nuevoContador){
    this.contador = nuevoContador;
    // this.cambioContador.emit(this.contador);
  }

}
