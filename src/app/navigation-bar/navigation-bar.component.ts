import { Component, HostListener } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: [
    './navigation-bar.component.css',
    '../../assets/css/bootstrap.min.css',
    '../../assets/css/font-awesome.css',
    '../../assets/css/templatemo-softy-pinko.css',
    '../../assets/css/flex-slider.css',
  ],
})
export class NavigationBarComponent {
  public mobile: boolean = false;

  public show: boolean = false;
  public screenWidth: any;

  constructor() {}

  @HostListener('window:resize', ['$event'])
  getScreenSize(event: any) {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth <= 996) {
      // 768px portrait
      this.mobile = true;
    } else {
      this.mobile = false;
    }
  }

  ngOnInit(): void {
    if (window.innerWidth <= 996) {
      // 768px portrait
      this.mobile = true;
      console.log('screen is mobile!');
    } else {
      this.mobile = false;
    }
  }
}
