import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppNavComponent } from './app-nav/app-nav.component';
import { AppHomeComponent } from './app-home/app-home.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { AppContactComponent } from './app-contact/app-contact.component';
import { ContactFormComponent } from './app-contact/contact-form/contact-form.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { AppAboutComponent } from './app-about/app-about.component';
import { NewsComponent } from './news/news.component';
import { NewsListComponent } from './news/news-list/news-list.component';
import { NewsDetailComponent } from './news/news-detail/news-detail.component';
import { OfferComponent } from './product/offer/offer.component';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { ImageSliderComponent } from './product/product-detail/image-slider/image-slider.component';

@NgModule({
  declarations: [
    AppComponent,
    AppNavComponent,
    AppHomeComponent,
    AppFooterComponent,
    AppContactComponent,
    ContactFormComponent,
    ProductComponent,
    ProductListComponent,
    ProductDetailComponent,
    AppAboutComponent,
    NewsComponent,
    NewsListComponent,
    NewsDetailComponent,
    OfferComponent,
    ControlPanelComponent,
    ImageSliderComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
