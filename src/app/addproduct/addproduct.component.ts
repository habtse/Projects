import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CUSTOMER } from '../customer/customer.object';
import { Product, PRODUCTS } from '../product/product.object';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
  }
productlist=PRODUCTS;

submitpro(form:NgForm){
  // for (let product of this.productlist){
    
  let product:Product={
  
  
    id:form.value.id,
    name:form.value.name,
    description:form.value.description,
    price:form.value.price,
    imageUrl:'assets/fila.png'
  }
  this.productlist.push(product)
  };

}


