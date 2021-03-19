import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, HostListener, Input, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class NavbarComponent {

  @Input() current: string = '';

  @Output() clickedLink = new EventEmitter<string>();

  components: string[] = ['About me', 'My skills', 'My projects', 'Contact'];

  check!: boolean;
  hamburger: boolean = true;
  links: boolean = false;

  constructor(
    @Inject (DOCUMENT) private document: Document
  ) { }

  @HostListener("document:scroll", [])
  onScroll() {
    const offset = this.document.documentElement.scrollTop ||
      this.document.body.scrollTop || 0;
    offset > 100 ? this.check = true : this.check = false;
  }

  isCurrent(name: string) {

    return this.components[Number(this.current) - 1] === name ?
     true : false;
  }

  goToLink(value: string) {
    this.clickedLink.emit(value);
  }
}
