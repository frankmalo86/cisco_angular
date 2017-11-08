/**
 * New typescript file
 */
import {Directive, HostListener, HostBinding, /*ElementRef, Renderer2*/} from "@angular/core";
@Directive({
  selector: 'li[contar-clicks]'
})
export class ContarClicksDirective {
  //constructor(private elRef: ElementRef, private renderer: Renderer2){}
  
  clickN = 0;
  @HostBinding('style.opacity') opacity: number = .1;

  @HostListener('click', ['$event.target']) onClick(btn) {
    console.log('a', btn, 'Número de clicks:', this.clickN++);
    this.opacity += .1;
    //const text = this.renderer.createText('' + this.opacity);
    //this.renderer.appendChild(this.elRef.nativeElement, text);
  }
}
