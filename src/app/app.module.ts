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
import { OrderPlacedComponent } from './order-placed/order-placed.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductDetail1Component } from './product-detail1/product-detail1.component';
import { ProductDetail2Component } from './product-detail2/product-detail2.component';
import { ProductDetail3Component } from './product-detail3/product-detail3.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ReturnAndExchangeComponent } from './return-and-exchange/return-and-exchange.component';
import { SaleComponent } from './sale/sale.component';
import { SearchPageGridComponent } from './search-page-grid/search-page-grid.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { SellOnQuicentroComponent } from './sell-on-quicentro/sell-on-quicentro.component';
import { SingleComponent } from './single/single.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { TodayDealsComponent } from './today-deals/today-deals.component';
import { TrackOrderComponent } from './track-order/track-order.component';
import { VendorDetailsComponent } from './vendor-details/vendor-details.component';
import { VendorRegistrationComponent } from './vendor-registration/vendor-registration.component';
import { WishlistQComponent } from './wishlist-q/wishlist-q.component';


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
    OrderPlacedComponent,
    ProductDetailComponent,
    ProductDetail1Component,
    ProductDetail2Component,
    ProductDetail3Component,
    ProductListComponent,
    ProductComponent,
    ResetPasswordComponent,
    ReturnAndExchangeComponent,
    SaleComponent,
    SearchPageGridComponent,
    SearchPageComponent,
    SellOnQuicentroComponent,
    SingleComponent,
    TermsConditionsComponent,
    TodayDealsComponent,
    TrackOrderComponent,
    VendorDetailsComponent,
    VendorRegistrationComponent,
    WishlistQComponent,
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
