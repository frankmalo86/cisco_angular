import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DetalleComponent  {

  id:number = 0;
  constructor(private router: ActivatedRoute) {
    this.id = this.router.snapshot.params['id'];
  }

}
