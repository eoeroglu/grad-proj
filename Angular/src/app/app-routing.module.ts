import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PivotTableComponent } from "./pivot-table/pivot-table.component";
import { SummaryComponent } from "./summary/summary.component";

const routes: Routes = [
  { path: "summary", component: SummaryComponent },
  { path: "pivot-table", component: PivotTableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
