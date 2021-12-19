import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { customer,CUSTOMER } from '../customer/customer.object';
@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.css']
})
export class AddcustomerComponent implements OnInit {

  constructor(private router:Router) { }
customerlist=CUSTOMER
  ngOnInit(): void {
  }


addcustomer(form:NgForm){
this.customerlist.push(form.value)
alert('successfully added')
  // this.router.navigateByUrl('/customer/:form.value.id')
}
}