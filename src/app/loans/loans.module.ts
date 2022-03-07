import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoansRoutingModule } from './loans-routing.module';
import { LoansComponent } from './loans.component';
import { ViewLoanComponent } from './view-loan/view-loan.component';


@NgModule({
  declarations: [
    LoansComponent,
    ViewLoanComponent
  ],
  imports: [
    CommonModule,
    LoansRoutingModule
  ]
})
export class LoansModule { }
