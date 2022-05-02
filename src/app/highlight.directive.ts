import { Directive, ElementRef, Renderer2 ,OnInit, HostListener, HostBinding} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit{

  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';
  constructor(private elErf: ElementRef, private rendered: Renderer2) { } 

  ngOnInit(){
    // this.rendered.setStyle(this.elErf.nativeElement, 'background-color', 'red');
  }
  @HostListener('mouseenter') mouseover(eventData: Event){
    // this.rendered.setStyle(this.elErf.nativeElement, 'background-color', 'blue');
    this.backgroundColor = 'blue'
  } 
  @HostListener('mouseleave') mouseleave(eventData: Event){
    // this.rendered.setStyle(this.elErf.nativeElement, 'background-color', 'red');
    this.backgroundColor = 'red'
    
  }
}
