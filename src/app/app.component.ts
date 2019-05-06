import { Component } from '@angular/core';
import { Store, Action } from '@ngrx/store';
// import { IncrementarAction, DecrementarAction } from './contador/contador.actions';
import { AppState } from './app.reducers';
import * as fromContador from './contador/contador.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  contador: number;

  constructor (private store:Store<AppState>){
    this.contador = 10;
    this.store.select('contador').subscribe(contador=>{
      console.log(contador);
      this.contador = contador;
    })
  }

  Incrementar(){
    // this.contador ++;
    const accion =  new fromContador.IncrementarAction();
    this.store.dispatch(accion);
  }
  Decrementar(){
    const accion =  new fromContador.DecrementarAction();

    if (this.contador>0){
      // this.contador --;
      this.store.dispatch(accion);
    }
  }

}
