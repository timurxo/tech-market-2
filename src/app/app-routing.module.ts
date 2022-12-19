import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PriceInfoComponent } from './price-info/price-info.component';
import { ProductsPageComponent } from './products-page/products-page.component';
import { ServicesPageComponent } from './services-page/services-page.component';

const routes: Routes = [
  // {
  //   path: '', redirectTo: "home-page", pathMatch: "full"
  // },
  {
    path: '', component: HomePageComponent
  },
  {
    path: 'price-page', component: PriceInfoComponent
  },
  {
    path: 'products-page', component: ProductsPageComponent
  },
  {
    path: 'services-page', component: ServicesPageComponent
  },
  {
    path: 'contact-page', component: ContactPageComponent
  },
  {
    path: 'footer', component: FooterComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, 
    {scrollPositionRestoration: 'enabled'})], // TODO: SCROLLS UP TO THE TOP OF THE PAGE AFTER REROUTING
  exports: [RouterModule]
})
export class AppRoutingModule { }
