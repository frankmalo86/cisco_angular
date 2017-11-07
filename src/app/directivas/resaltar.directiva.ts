/**
 * New typescript file
 */
import {Directive, OnInit, ElementRef, Renderer2, Input} from '@angular/core';

@Directive({
  selector: '[resaltar]'
})

export class ResaltarDirective implements OnInit {

  @Input('resaltar') tipo: string = '';

  constructor(private elRef: ElementRef, private renderer: Renderer2){}

  ngOnInit() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'font-weight', 'bold');
    const boton = this.renderer.createElement('button');
    const text = this.renderer.createText('Presioname');
    this.renderer.appendChild(boton, text);
    this.renderer.appendChild(this.elRef.nativeElement, boton);
    if (this.tipo === 'M') {
      this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'yellow');
    } else {
      this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'green');
    }
  }
}
