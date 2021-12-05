import { Customer } from './../../models/customer.model';
import { CustomerService } from './../../services/customer.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {
  customerForm: FormGroup;

  message = {
    status: 0,
    text: ''
  };

  customer: Customer = new Customer;
  customerId: string;
  customerData: any;

  constructor(
    private customerService: CustomerService, 
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(data => {
      this.customerId = data.id;
    });

    this.customerForm = new FormGroup({
      'firstName': new FormControl(null, Validators.required),
      'lastName': new FormControl(null, Validators.required),
      'emailAddress': new FormControl(null, Validators.required),
      'phoneNumber': new FormControl(null, Validators.required),
      'dept': new FormControl(null, Validators.required)
    });

    this.customerService.viewCustomer(this.customerId).subscribe(data => {
      this.customerData = data;
      this.customer = this.customerData.data;
      
      this.customerForm.setValue({
        'firstName': this.customer.firstName,
        'lastName': this.customer.lastName,
        'emailAddress': this.customer.emailAddress,
        'phoneNumber': this.customer.phoneNumber,
        'dept': this.customer.department
      });
    });
  }

  onSubmit():void{
    if(this.customerForm.valid){
      this.customerService.editCustomer(this.customerId, this.customerForm.value).subscribe((res) =>{
        let data = JSON.parse(JSON.stringify(res));
        this.message = {
          status: data.status,
          text: data.message
        };

        if(data.status == 200) setTimeout(() => {
          this.router.navigate(['customers']);
        }, 1000); 
        
      });
    }
  }
}
