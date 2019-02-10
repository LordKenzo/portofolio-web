import { Directive, ElementRef, OnInit, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appScrolling]',
})
export class FixHeaderDirective implements OnInit {
  constructor(private hostElement: ElementRef, private renderer: Renderer2) {}
  @Input() darkClass: string;
  @Input() lightClass: string;

  ngOnInit() {}
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.pageYOffset;

    if (scrollPosition > 200) {
      this.renderer.addClass(this.hostElement.nativeElement, this.darkClass);
      this.renderer.removeClass(this.hostElement.nativeElement, this.lightClass);
    } else {
      this.renderer.addClass(this.hostElement.nativeElement, this.lightClass);
      this.renderer.removeClass(this.hostElement.nativeElement, this.darkClass);
    }
  }
}
