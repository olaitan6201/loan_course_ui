import { LoanType } from './../models/loan-type.model';
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.dev';

@Injectable({
  providedIn: 'root'
})

export class LoanTypeService {
  loanTypes: LoanType[] = [];

  constructor(private httpCLient: HttpClient) {}


  //Methods to communicate with backend APIs

  addLoanType(loanType: LoanType){
    let url = environment.LOAN_TYPE_BASE_URL+environment.LOAN_TYPE.ADD_LOAN_TYPE;

    return this.httpCLient.post(url, loanType);
  }

  getLoanTypes(page: number){
    let url = environment.LOAN_TYPE_BASE_URL+environment.LOAN_TYPE.GET_ALL_LOAN_TYPES;
    url += '?page='+page;
    return this.httpCLient.get(url);
  }

  viewLoanType(id: string){
    let url = environment.LOAN_TYPE_BASE_URL+environment.LOAN_TYPE.GET_LOAN_TYPE_DETAILS;
    url += ('?loanId='+id);
    return this.httpCLient.get(url);
  }

  editLoanType(id, loanTypeObj){
    let url = environment.LOAN_TYPE_BASE_URL+environment.LOAN_TYPE.UPDATE_LOAN_TYPE_DETAILS;
    url += ('?loanId='+id);
    return this.httpCLient.put(url, loanTypeObj);
  }

  deleteLoanType(id: string){
    let url = environment.LOAN_TYPE_BASE_URL+environment.LOAN_TYPE.DELETE_LOAN_TYPE;
    url += ('?loanId='+id);
    return this.httpCLient.delete(url);
  }

  searchLoanTypes(keyword: string){
    let url = environment.LOAN_TYPE_BASE_URL+environment.LOAN_TYPE.SEARCH_LOAN_TYPE;
    url += ('?keyword='+keyword);
    return this.httpCLient.get(url);
  }
}