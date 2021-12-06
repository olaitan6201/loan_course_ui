import { PageNotFoundComponent } from './../page-not-found/page-not-found.component';
import { EditLoanTypeComponent } from './edit-loan-type/edit-loan-type.component';
import { AddLoanTypeComponent } from './add-loan-type/add-loan-type.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoanTypesComponent } from './loan-types.component';

const routes: Routes = [
  { path: 'add', component: AddLoanTypeComponent },
  { path: 'edit/:id', component: EditLoanTypeComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoanTypesRoutingModule { }
