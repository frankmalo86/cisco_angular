import { Component } from '@angular/core';

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

  constructor() {
  	setTimeout(() =>{
	  	this.boton_desabilitado = false;
	  	this.nombre = 'Frank Malo';
	  }, 3000)
  }

  //event binding
  mostrar_nombre(){
  	alert(this.nombre);
  }

}
