import { CustomerService } from './../../services/customer.service';
import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer.model';

@Component({
  selector: 'app-list-customers',
  templateUrl: './list-customers.component.html',
  styleUrls: ['./list-customers.component.css']
})
export class ListCustomersComponent implements OnInit {
  searchKeyword = '';
  customerResult: any;
  customerList: Customer[] = [];
  from: number;
  to: number;
  count: number;
  page: number = 1;
  pageCount: number;

  navPages: number[] = [];
  
  
  constructor(private customerService: CustomerService) { }
  
  ngOnInit(): void {
    this.getCustomerList(this.page);
  }

  getCustomerList(page: number){
    this.customerService.getCustomers(page).subscribe(data => {
      this.customerResult = data;
      this.customerList = this.customerResult.data;
      
      this.from = this.customerResult.from;
      this.to = this.customerResult.to;
      this.count = this.customerResult.count;
      this.page = this.customerResult.page;
      this.pageCount = this.customerResult.pageCount;

      
      this.navPages = Array(this.pageCount).fill(0).map((x,i)=>i+1);
      console.log(this.pageCount, this.navPages);
    });
  }

  deleteCustomer(id: string): void{
    if(confirm('Are you sure to delete this customer?'))
    this.customerService.deleteCustomer(id).subscribe(data => {
      this.customerList = this.customerList.filter(customer => customer._id !== id);
    });

    else alert('Request cancelled');
  }

  searchCustomer(){
    if(this.searchKeyword.trim().length == 0) return this.getCustomerList(1);

    this.customerService.searchCustomers(this.searchKeyword).subscribe(data => {
      this.customerResult = data;
      this.customerList = this.customerResult.data;
    });
  }

  goto(page:number){
    this.page = page;
    this.getCustomerList(this.page);
  }

}
