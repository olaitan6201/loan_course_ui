import { ViewLoanComponent } from './view-loan/view-loan.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoansComponent } from './loans.component';

const routes: Routes = [
  { path: '', component: LoansComponent },
  { path: 'view/:id', component: ViewLoanComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoansRoutingModule { }
