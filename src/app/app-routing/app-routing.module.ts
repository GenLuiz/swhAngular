import { AppContactComponent } from './../app-contact/app-contact.component';
import { NewsListComponent } from './../news/news-list/news-list.component';
import { ProductListComponent } from './../product/product-list/product-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsDetailComponent } from './../news/news-detail/news-detail.component';
import { AppHomeComponent } from '../app-home/app-home.component';
import { OfferComponent } from '../product/offer/offer.component';
import { AppAboutComponent } from '../app-about/app-about.component';

const routes: Routes =[
    {
        path: '', redirectTo:'/home', pathMatch: 'full'
    },
    {
        path: 'home', component: AppHomeComponent
    },
    {
        path: 'products', component: ProductListComponent
    },
    {
        path: 'offer', component: OfferComponent
    },
    {
        path: 'news', component: NewsListComponent
    },
    {
        path: 'about', component: AppAboutComponent
    },
    {
        path: 'contact', component: AppContactComponent
    },
    {
        path: 'news-detail/:id', component: NewsDetailComponent
    },
    
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})

export class AppRoutingModule{}