export class Loan {
  _id: string;
  loanName: string = '';
  loanType: string = '';
  loanAmount: number = 0;
  pendingAmount: number = 0;
  loanStatus: number = 0;
  date_created: Date;
}