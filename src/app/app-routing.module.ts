import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PairingsComponent} from "./pairings/pairings.component";

const routes: Routes = [
  {path: "", component: PairingsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
