import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { ProductComponent } from './product/product.component';
import { FormsModule } from '@angular/forms';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { CustomerComponent } from './customer/customer.component';
import { AddproducComponent } from './addproduc/addproduc.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    ProductComponent,
    ProductDetailComponent,
    AddproductComponent,
    AddcustomerComponent,
    CustomerComponent,
    AddproducComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
