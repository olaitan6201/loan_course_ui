import { Customer } from './../../models/customer.model';
import { CustomerService } from './../../services/customer.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css']
})
export class ViewCustomerComponent implements OnInit {
  customerId: string = '';
  customerDetails: any;
  customer: Customer = new Customer;

  constructor(
    private route: ActivatedRoute,
    private customerService: CustomerService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(data => {
      this.customerId = data.id;
    });

    this.customerService.viewCustomer(this.customerId).subscribe(data => {
      this.customerDetails = data;
      this.customer = this.customerDetails.data;
    });
  }

}
