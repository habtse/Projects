import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product, PRODUCTS } from './product.object';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    console.log("called ")
    
  }
  newproduct=Product
 
  onViewDetail(id:number)
  {
    alert("success!");
 console.log(id);
 this.router.navigateByUrl('/product/detail/' + id); // ‘id’ is called parameter

}
 productlist=PRODUCTS;
// constructor(private router: Router){ }



success(){

  alert(" you are success!!!")
}
addbutton(){
this.router.navigateByUrl('product/addpruduct/')
}
deletePro(id:any){
  for (let product of this.productlist )
  this.productlist.filter(nm => nm.id != id)
         alert("succ" +id)
   console.log( this.productlist)
  // this.productlist.filter(id=> id.id >id)
}
  }
