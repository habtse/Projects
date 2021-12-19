import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product, PRODUCTS } from '../product/product.object';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
selectedproduct :any;
productlist=PRODUCTS;
  constructor(private route:ActivatedRoute,private router:Router){ }

  ngOnInit(): void {
    this.route.params.subscribe(
     param => {
      for (let product of this.productlist){
        if( product.id==param['id']){
          this.selectedproduct=product;
        }
      }
    }
    );
  }
  success(form:NgForm){
    alert('success')
    console.log(form.value)

    this.selectedproduct.name=form.value.name
    this.selectedproduct.price=form.value.price








    // this.selectedproduct.name=form.name;
    // this.selectedproduct.name = this.newproduct.name;
    // this.selectedproduct.price = this.newproduct.price;
    // this.newproduct = new Product();
    // this.router.navigateByUrl('product');
    
    // this.selectedproduct.price=form.price

 
}
}
