import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { customer,CUSTOMER } from './customer.object';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  // constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    
  }
  

 customerlist=CUSTOMER;


}
