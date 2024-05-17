import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CustomerApportunityComponent } from "./customer-apportunity/customer-apportunity.component";
import { CustomerDetailsComponent } from "./customer-details/customer-details.component";
import { CustomersComponent } from "./customers.component";

const routes: Routes = [
  {
    path: "",
    component: CustomersComponent,
    children: [
      {
        path: "details/:id",
        component: CustomerDetailsComponent,
      },
      {
        path: "details/:id/opportunity",
        component: CustomerApportunityComponent,
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomersRoutingModule {}
