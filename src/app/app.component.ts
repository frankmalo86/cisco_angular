import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cisco App';
  // string interpolation
  a = 3;
  b = 5;
  // property binding
  boton_desabilitado = true;
  nombre = '';

  items: any = [
    {nombre: 'item1', edad : 20},
    {nombre: 'item2', edad : 20},
    {nombre: 'item3', edad : 22},
    {nombre: 'item4', edad : 16},
    {nombre: 'item5', edad : 19},
    {nombre: 'item6', edad : 17}
  ];


  constructor() {
    setTimeout(() => {
      this.boton_desabilitado = false;
      this.nombre = 'Frank Malo';
    }, 3000);
  }

  // event binding
  mostrar_nombre() {
    alert(this.nombre);
  }

}
