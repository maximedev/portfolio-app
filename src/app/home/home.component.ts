import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, query, group, animate, animateChild } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  customOptions: any = {
    loop: true,
    autoplay:true,
    autoplayTimeout: 5000,
    autoplaySpeed : 700,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    responsive: {
      0: {
        items: 1
      }
    },
    nav: true
  };

  slides = new Array<any>();

  constructor() { }

  ngOnInit() {
    this.slides.push({'url':'assets/img/slider1.jpg', 'id':'1' });
    this.slides.push({'url':'assets/img/slider2.jpg', 'id':'2' });
    this.slides.push({'url':'assets/img/slider3.jpg', 'id':'3' });
  }

}
