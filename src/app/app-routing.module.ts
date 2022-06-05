import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoggersComponent} from "./loggers/loggers.component";
import {DashboardComponent} from "./dashboard/dashboard.component";

const routes: Routes = [
  {path: "loggers", component: LoggersComponent},
  {path: "", component: DashboardComponent, pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
