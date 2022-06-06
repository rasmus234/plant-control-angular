import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PairingComponent} from "./pairing/pairing.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'pairing', component: PairingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
