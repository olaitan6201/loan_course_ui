import { map } from 'rxjs/operators';
import { CustomerService } from './../../services/customer.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  customerForm: FormGroup;

  message = {
    status: 0,
    text: ''
  };

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.customerForm = new FormGroup({
      'firstName': new FormControl(null, Validators.required),
      'lastName': new FormControl(null, Validators.required),
      'emailAddress': new FormControl(null, Validators.required),
      'phoneNumber': new FormControl(null, Validators.required),
      'dept': new FormControl(null, Validators.required),
    });
  }

  onSubmit():void{
    if(this.customerForm.valid){
      this.customerService.addCustomer(this.customerForm.value).subscribe((res) =>{
        let data = JSON.parse(JSON.stringify(res));
        this.message = {
          status: data.status,
          text: data.message
        };

        if(data.status == 200) this.customerForm.reset(); 
        
      });
    }
  }

}
