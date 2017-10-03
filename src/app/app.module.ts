
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';
import { RouterModule }   from '@angular/router';


// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data/in-memory-data.service';

import { AppRoutingModule } from './app-routing/app-routing.module';

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
import { ProductService } from './product-service/product.service';
import { NewsService } from './news-service/news.service';

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
    BrowserModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  providers: [ProductService, NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
