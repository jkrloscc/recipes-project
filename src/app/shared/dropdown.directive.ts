import { Directive, HostListener, OnInit, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {

  @HostBinding('class.open') isOpen: boolean;
  @HostListener('click') toogleOpen() {
    this.isOpen = !this.isOpen;
  }

  constructor() { }

  // Dropdown can also be closed by a click anywhere outside
  // @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
  //   this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  // }
  // constructor(private elRef: ElementRef) {}

  ngOnInit(): void {
    this.isOpen = false;
  }

}
