import { Component, ViewChild, ElementRef, AfterViewInit, HostListener} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('stickyMenu') menuElement: ElementRef;

  title = 'portfolio-app';

  hideMenu: boolean = true;
  sticky: boolean = false;

  elementPosition: any;

  openMenu(){
    this.hideMenu = !this.hideMenu;
  }

  ngAfterViewInit(){
    this.elementPosition = this.menuElement.nativeElement.offsetTop;
  }

  @HostListener('window:scroll', ['$event'])
  handleScroll(){
    const windowScroll = window.pageYOffset;

    if(windowScroll > this.elementPosition){
      this.sticky = true;
    } else {
      this.sticky = false;
    }
  }

  scrollToElement($element): void {
    console.log($element);
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

}
