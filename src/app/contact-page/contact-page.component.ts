import { Component } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: [
    './contact-page.component.css',
    '../../assets/css/bootstrap.min.css',
    '../../assets/css/font-awesome.css',
    '../../assets/css/templatemo-softy-pinko.css',
    '../../assets/css/flex-slider.css',
    '../home-page/home-page.component.css',
  ],
})
export class ContactPageComponent {

  constructor() {}

  ngOnInit(): void {
    AOS.init({
      once: true, // this one if you want to load animation once else you can remove it
    });
  }
}
