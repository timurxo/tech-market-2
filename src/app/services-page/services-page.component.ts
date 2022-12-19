import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-services-page',
  templateUrl: './services-page.component.html',
  styleUrls: [
    './services-page.component.css',
    '../../assets/css/bootstrap.min.css',
    '../../assets/css/font-awesome.css',
    '../../assets/css/templatemo-softy-pinko.css',
    '../../assets/css/flex-slider.css',
  ],
})
export class ServicesPageComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
    AOS.init({
      once: true, // this one if you want to load animation once else you can remove it
    });
  }
}
