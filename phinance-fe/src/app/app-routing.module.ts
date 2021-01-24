import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CreditMainViewComponent } from "./credit-main-view/credit-main-view.component";
import { DashboardViewComponent } from './dashboard-view/dashboard-view.component';
import { LoansMainViewComponent } from "./loans-main-view/loans-main-view.component";

const routes: Routes = [
  { path: "", redirectTo: "dashboard", pathMatch: "full"},
  { path: "dashboard", component: DashboardViewComponent},
  { path: "credit", component: CreditMainViewComponent },
  { path: "loans", component: LoansMainViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
