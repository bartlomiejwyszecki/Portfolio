import { Component, ElementRef, HostListener, QueryList, ViewChildren } from '@angular/core';

const areas = '1,2,3,4,5';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';

  current: string = '';

  link: string = '';

  @ViewChildren(areas) components!: QueryList<ElementRef>;

  @HostListener('window:scroll', ['$event']) onScroll(event: Event) {
    const activeComponent = this.components.toArray().findIndex(
      component => this.isElementInViewPort(component.nativeElement));

      this.current = areas.split(',')[activeComponent];
      //console.log('Current ' + this.current + ', Active component: ' + activeComponent);
  }

  isElementInViewPort(el: any) {
    let rect = el.getBoundingClientRect();
  
    return (
      rect.bottom >= 0 && rect.right >= 0 && 
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.left <= (window.innerHeight || document.documentElement.clientWidth)
    );
  }

  updateCurrentLink(currentLink: string) {
    this.link = currentLink;
    const yOffset = 50; 
    const element = document.getElementById(currentLink);
    const y = element!.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({top: y, behavior: 'smooth'});
    console.log('Current link in appcomponent: ' + currentLink);
  }

  scrollTo(el: HTMLElement) {
    el.scrollIntoView();
  }
}
