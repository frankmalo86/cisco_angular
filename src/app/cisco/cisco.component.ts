import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-cisco',
  templateUrl: './cisco.component.html',
  styleUrls: ['./cisco.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CiscoComponent {
  // string interpolation
  a = 3;
  b = 5;
  // property binding
  boton_desabilitado = true;
  nombre = '';

  items: any = [
    {id: 1, nombre: 'item1', edad: 20, habilitado: true, tipo: 'M'},
    {id: 2, nombre: 'item2', edad: 20, habilitado: false, tipo: 'F'},
    {id: 3, nombre: 'item3', edad: 22, habilitado: true, tipo: 'F'},
    {id: 4, nombre: 'item4', edad: 16, habilitado: false, tipo: 'M'},
    {id: 5, nombre: 'item5', edad: 19, habilitado: true, tipo: 'M'},
    {id: 6, nombre: 'item6', edad: 17, habilitado: false, tipo: 'F'}
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
