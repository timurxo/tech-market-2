import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-price-info',
  templateUrl: './price-info.component.html',
  styleUrls: [
    './price-info.component.css',
    '../../assets/css/bootstrap.min.css',
    '../../assets/css/font-awesome.css',
    '../../assets/css/templatemo-softy-pinko.css',
    '../../assets/css/flex-slider.css'
  ],
})
export class PriceInfoComponent implements OnInit {

  ngOnInit(): void {
    AOS.init({
      once: true, // this one if you want to load animation once else you can remove it
    });
  }
}
