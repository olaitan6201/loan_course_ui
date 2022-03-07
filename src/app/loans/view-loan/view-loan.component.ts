import { Loan } from './../../models/loan.model';
import { LoanService } from './../../services/loan.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-loan',
  templateUrl: './view-loan.component.html',
  styleUrls: ['./view-loan.component.css']
})
export class ViewLoanComponent implements OnInit {

  loanId: string;
  loanResult: any;
  loan: Loan;

  constructor(
    private route: ActivatedRoute,
    private loanService: LoanService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((data)=>{
      this.loanId = data.id;
    });

    this.loanService.viewLoan(this.loanId).subscribe(data => {
      this.loanResult = data;
      this.loan = this.loanResult.data;
    });
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
