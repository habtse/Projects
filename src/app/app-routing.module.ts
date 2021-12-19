import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { ADDRCONFIG } from 'dns';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { CustomerComponent } from './customer/customer.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductComponent } from './product/product.component';
import { Product } from './product/product.object';
const routes: Routes = [{
  path: 'product/detail/:id',
  component: ProductDetailComponent
},

{
  path: 'product',
  component: ProductComponent
  
},
{path:'product2',
component: ProductDetailComponent
},
{
  path:'addcustomer',
  component:AddcustomerComponent
},
{
  path:'customer',
  component:CustomerComponent
},
{
  path:'customer/:form.value.id',
  component:CustomerComponent
},
{
  path:'product/addpruduct/',
  component:AddproductComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
