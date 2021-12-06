import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoanTypeService } from './../../services/loan-type.service';
import { Component, OnInit } from '@angular/core';
import { LoanType } from 'src/app/models/loan-type.model';

@Component({
  selector: 'app-add-loan-type',
  templateUrl: './add-loan-type.component.html',
  styleUrls: ['./add-loan-type.component.css']
})
export class AddLoanTypeComponent implements OnInit {

  searchKeyword = '';
  ltResult: any;
  ltList: LoanType[] = [];
  from: number;
  to: number;
  count: number;
  page: number = 1;
  pageCount: number;
  ltAdded: LoanType;

  loanTypeForm: FormGroup;

  message = {
    status: 0,
    text: ''
  };

  navPages: number[] = [];

  constructor(private ltService: LoanTypeService) { }

  ngOnInit(): void {

    this.getLoanTypeList(this.page);
    this.loanTypeForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'description': new FormControl(null, Validators.required)
    });
  }

  getLoanTypeList(page: number){
    this.ltService.getLoanTypes(page).subscribe(data => {
      this.ltResult = data;
      this.ltList = this.ltResult.data;
      
      this.from = this.ltResult.from;
      this.to = this.ltResult.to;
      this.count = this.ltResult.count;
      this.page = this.ltResult.page;
      this.pageCount = this.ltResult.pageCount;

      
      this.navPages = Array(this.pageCount).fill(0).map((x,i)=>i+1);
    });
  }


  deleteLoanType(id: string): void{
    if(confirm('Are you sure to delete this loan type?'))
    this.ltService.deleteLoanType(id).subscribe(data => {
      this.ltList = this.ltList.filter(customer => customer._id !== id);
    });

    else alert('Request cancelled');
  }

  searchLoanTypes(){
    if(this.searchKeyword.trim().length == 0) return this.getLoanTypeList(1);

    this.ltService.searchLoanTypes(this.searchKeyword).subscribe(data => {
      this.ltResult = data;
      this.ltList = this.ltResult.data;
    });
  }

  goto(page:number){
    this.page = page;
    this.getLoanTypeList(this.page);
  }


  onSubmit():void{
    if(this.loanTypeForm.valid){
      console.log(this.loanTypeForm.value);
      
      this.ltService.addLoanType(this.loanTypeForm.value).subscribe((res) =>{
        let data = JSON.parse(JSON.stringify(res));
        this.ltResult = res;
        this.ltAdded = this.ltResult.data;
        this.ltList.push(this.ltAdded);
        this.message = {
          status: data.status,
          text: data.message
        };

        if(data.status == 200) this.loanTypeForm.reset(); 
        
      });
    }
  }

}
