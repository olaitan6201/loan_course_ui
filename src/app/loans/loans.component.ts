import { LoanService } from './../services/loan.service';
import { Loan } from './../models/loan.model';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.dev';

@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.css']
})
export class LoansComponent implements OnInit {
  searchKeyword = '';
  loanResult: any;
  loanList: Loan[] = [];
  from: number;
  to: number;
  count: number;
  page: number = 1;
  pageCount: number;

  navPages: number[] = [];
  
  
  constructor(private loanService: LoanService) { }
  
  ngOnInit(): void {
    this.getLoanList(this.page);
  }

  getLoanList(page: number){
    this.loanService.getLoans(page).subscribe(data => {
      this.loanResult = data;
      this.loanList = this.loanResult.data;
      
      this.from = this.loanResult.from;
      this.to = this.loanResult.to;
      this.count = this.loanResult.count;
      this.page = this.loanResult.page;
      this.pageCount = this.loanResult.pageCount;

      
      this.navPages = Array(this.pageCount).fill(0).map((x,i)=>i+1);
    });
  }

  deleteLoan(id: string): void{
    if(confirm('Are you sure to delete this Loan?'))
    this.loanService.deleteLoan(id).subscribe(data => {
      this.loanList = this.loanList.filter(loan => loan._id !== id);
    });

    else alert('Request cancelled');
  }

  searchLoan(){
    if(this.searchKeyword.trim().length == 0) return this.getLoanList(1);

    this.loanService.searchLoans(this.searchKeyword).subscribe(data => {
      this.loanResult = data;
      this.loanList = this.loanResult.data;
    });
  }

  goto(page:number){
    this.page = page;
    this.getLoanList(this.page);
  }

  getLoanStatus(status: number){
    if(status) return 'Completed';

    return 'Pending';
  }

  getPendingAmount(pendingAmount: number, totalAmount: number, status: number){
    if(status) return 0;
    if(!pendingAmount) return totalAmount;
    else return totalAmount - pendingAmount;
  }

  number_format(number){
    return number.toLocaleString('us', {minimumFractionDigits: 2, maximumFractionDigits: 2});
  }

}
