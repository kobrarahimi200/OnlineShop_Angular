import { Directive, ElementRef, Renderer2 ,OnInit} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit{

  constructor(private elErf: ElementRef, private rendered: Renderer2) { }

  ngOnInit(){
    this.rendered.setStyle(this.elErf.nativeElement, 'background-color', 'red');
  }
}
