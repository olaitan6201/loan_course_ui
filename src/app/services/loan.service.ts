import { Loan } from './../models/loan.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.dev';

@Injectable({
  providedIn: 'root'
})
export class LoanService {
  loans: Loan[] = [];

  constructor(private httpCLient: HttpClient) {}


  //Methods to communicate with backend APIs
  addLoan(loan: Loan){
    let url = environment.LOAN_BASE_URL+environment.LOAN.ADD_LOAN;

    return this.httpCLient.post(url, loan);
  }

  getLoans(page: number){
    let url = environment.LOAN_BASE_URL+environment.LOAN.GET_ALL_LOANS;
    url += '?page='+page;
    return this.httpCLient.get(url);
  }

  viewLoan(id: string){
    let url = environment.LOAN_BASE_URL+environment.LOAN.GET_LOAN_DETAILS;
    url += ('?loanId='+id);
    return this.httpCLient.get(url);
  }

  editLoan(id, loanObj){
    let url = environment.LOAN_BASE_URL+environment.LOAN.UPDATE_LOAN_DETAILS;
    url += ('?loanId='+id);
    return this.httpCLient.put(url, loanObj);
  }

  deleteLoan(id: string){
    let url = environment.LOAN_BASE_URL+environment.LOAN.DELETE_LOAN;
    url += ('?loanId='+id);
    return this.httpCLient.delete(url);
  }

  searchLoans(keyword: string){
    let url = environment.LOAN_BASE_URL+environment.LOAN.SEARCH_LOAN;
    url += ('?keyword='+keyword);
    return this.httpCLient.get(url);
  }
}
