import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbDatepickerModule,
  NbDialogModule,
  NbFormFieldModule,
  NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbSpinnerModule,
  NbTooltipModule,
} from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { SharedModule } from '../shared/shared.module';
import { CustomerAddDialogComponent } from './customer-add-dialog/customer-add-dialog.component';
import { CustomerDetailsAddDialogComponent } from './customer-details-add-dialog/customer-details-add-dialog.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { EndProcessDialogComponent } from './end-process-dialog/end-process-dialog.component';

@NgModule({
  declarations: [
    CustomersComponent,
    CustomerDetailsComponent,
    CustomerAddDialogComponent,
    CustomerDetailsAddDialogComponent,
    EndProcessDialogComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    CustomersRoutingModule,
    Ng2SmartTableModule,
    NbCardModule,
    NbSelectModule,
    NbActionsModule,
    NbIconModule,
    NbButtonModule,
    NbDialogModule.forChild(),
    NbInputModule,
    NbDatepickerModule,
    NbSpinnerModule,
    NbRadioModule,
    NbFormFieldModule,
    NbTooltipModule,
  ],
})
export class CustomersModule {}
