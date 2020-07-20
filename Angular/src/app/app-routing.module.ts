import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PivotTableComponent } from "./pivot-table/pivot-table.component";
import { SummaryComponent } from "./summary/summary.component";
import { ForecastComponent } from './forecast/forecast.component';

const routes: Routes = [
  { path: "summary", component: SummaryComponent },
  { path: "pivot-table", component: PivotTableComponent },
  { path: "forecast", component: ForecastComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
