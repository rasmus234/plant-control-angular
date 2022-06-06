import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {PairingsComponent} from "./pairings/pairings.component";

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "pairings", component: PairingsComponent, pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
