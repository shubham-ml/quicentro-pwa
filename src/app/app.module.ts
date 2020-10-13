import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AboutUsComponent } from './about-us/about-us.component';
import { AddCartComponent } from './add-cart/add-cart.component';
import { BlogMasonryComponent } from './blog-masonry/blog-masonry.component';
import { BlogQComponent } from './blog-q/blog-q.component';
import { CategoryGridComponent } from './category-grid/category-grid.component';
import { CategoryListviewComponent } from './category-listview/category-listview.component';
import { CheckoutQComponent } from './checkout-q/checkout-q.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';
import { DeliveryShippingComponent } from './delivery-shipping/delivery-shipping.component';
import { FaqQComponent } from './faq-q/faq-q.component';
import { IndexComponent } from './index/index.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    AddCartComponent,
    BlogMasonryComponent,
    BlogQComponent,
    CategoryGridComponent,
    CategoryListviewComponent,
    CheckoutQComponent,
    ComingSoonComponent,
    ContactUsComponent,
    CreateAccountComponent,
    CustomerProfileComponent,
    DeliveryShippingComponent,
    FaqQComponent,
    IndexComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
