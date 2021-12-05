import { Customer } from './../models/customer.model';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment.dev";
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CustomerService {

  customerSub = new Subject<Customer[]>();

  customers: Customer[] = [];

  constructor(private httpCLient: HttpClient) {}


  //Methods to communicate with backend APIs

  addCustomer(customer: Customer){
    let url = environment.CUSTOMER_BASE_URL+environment.CUSTOMER.ADD_CUSTOMER;

    return this.httpCLient.post(url, customer);
  }

  getCustomers(page: number){
    let url = environment.CUSTOMER_BASE_URL+environment.CUSTOMER.GET_ALL_CUSTOMERS;
    url += '?page='+page;
    return this.httpCLient.get(url);
  }

  viewCustomer(id: string){
    let url = environment.CUSTOMER_BASE_URL+environment.CUSTOMER.GET_CUSTOMER_DETAILS;
    url += ('?userId='+id);
    return this.httpCLient.get(url);
  }

  editCustomer(id, customerObj){
    let url = environment.CUSTOMER_BASE_URL+environment.CUSTOMER.UPDATE_CUSTOMER_DETAILS;
    url += ('?userId='+id);
    return this.httpCLient.put(url, customerObj);
  }

  deleteCustomer(id: string){
    let url = environment.CUSTOMER_BASE_URL+environment.CUSTOMER.DELETE_CUSTOMER;
    url += ('?userId='+id);
    return this.httpCLient.delete(url);
  }

  searchCustomers(keyword: string){
    let url = environment.CUSTOMER_BASE_URL+environment.CUSTOMER.SEARCH_CUSTOMER;
    url += ('?keyword='+keyword);
    return this.httpCLient.get(url);
  }
}