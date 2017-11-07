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
    {nombre: 'item1', edad: 20, habilitado: true, tipo: 'M'},
    {nombre: 'item2', edad: 20, habilitado: false, tipo: 'F'},
    {nombre: 'item3', edad: 22, habilitado: true, tipo: 'F'},
    {nombre: 'item4', edad: 16, habilitado: false, tipo: 'M'},
    {nombre: 'item5', edad: 19, habilitado: true, tipo: 'M'},
    {nombre: 'item6', edad: 17, habilitado: false, tipo: 'F'}
  ];

  lat = 51.678418;
  lng = 7.809007;

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
