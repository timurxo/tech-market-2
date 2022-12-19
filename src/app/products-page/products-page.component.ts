import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: [
    './products-page.component.css',
    '../../assets/css/bootstrap.min.css',
    '../../assets/css/font-awesome.css',
    '../../assets/css/templatemo-softy-pinko.css',
    '../../assets/css/flex-slider.css',
  ],
})
export class ProductsPageComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
    AOS.init({
      once: true, // this one if you want to load animation once else you can remove it
    });
  }
}
