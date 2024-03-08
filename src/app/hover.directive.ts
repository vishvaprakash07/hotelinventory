import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, HostListener, Inject, Input, OnInit, Renderer2 } from '@angular/core';


@Directive({
  selector: '[appHover]'
})
export class HoverDirective implements OnInit {

  constructor(private element: ElementRef, private renderer: Renderer2 ) { 
    console.log(this.element.nativeElement);
  }
  @Input() colour: string = "red";
  ngOnInit(): void {
    // this.element.nativeElement.style.backgroundColor = this.colour;
    this.renderer.setStyle(
      this.element.nativeElement,
      "backgroundColor",
      this.colour
    );
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(
      this.element.nativeElement,
      "backgroundColor",
      "green"
    );
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(
      this.element.nativeElement,
      "backgroundColor",
      "white"
    );
  }

}
