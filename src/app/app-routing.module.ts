import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogMasonryComponent } from './blog-masonry/blog-masonry.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AddCartComponent } from './add-cart/add-cart.component';
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


const routes: Routes = [
  { path: 'about-us', component: AboutUsComponent },
  { path: 'add-cart', component: AddCartComponent },
  { path: 'blog-masonry', component: BlogMasonryComponent },
  { path: 'blog-q', component: BlogQComponent },
  { path: 'category-grid', component: CategoryGridComponent },
  { path: 'category-listview', component: CategoryListviewComponent },
  { path: 'checkout-q', component: CheckoutQComponent },
  { path: 'coming-soon', component: ComingSoonComponent },
  { path: 'cotact-us', component: ContactUsComponent },
  { path: 'create-account', component: CreateAccountComponent },
  { path: 'customer-profile', component: CustomerProfileComponent },
  { path: 'delivery-shipping', component: DeliveryShippingComponent },
  { path: 'faq', component: FaqQComponent },
  { path: '', component: IndexComponent },
  { path: '**', component: PageNotFoundComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

