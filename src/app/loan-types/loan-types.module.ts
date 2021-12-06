import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoanTypesRoutingModule } from './loan-types-routing.module';
import { LoanTypesComponent } from './loan-types.component';
import { AddLoanTypeComponent } from './add-loan-type/add-loan-type.component';
import { EditLoanTypeComponent } from './edit-loan-type/edit-loan-type.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoanTypesComponent,
    AddLoanTypeComponent,
    EditLoanTypeComponent
  ],
  imports: [
    CommonModule,
    LoanTypesRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class LoanTypesModule { }
