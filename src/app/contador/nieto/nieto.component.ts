// import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { ResetAction } from '../contador.actions';
@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styles: []
})
export class NietoComponent implements OnInit {
  // @Input() contador:number;
  // @Output() reseteoContador = new EventEmitter<number>();
  contador:number;

  constructor(private store:Store<AppState>) {
    this.store.select('contador').subscribe( contador => {
      console.log(contador);
      this.contador = contador;
    })

  }
  ngOnInit() {
  }
  Reset(){
    const accion = new ResetAction();
    this.store.dispatch(accion);
    // this.contador = 0;
    // this.reseteoContador.emit(this.contador);
  }

}
