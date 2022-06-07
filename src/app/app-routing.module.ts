import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PairingComponent} from "./pairing/pairing.component";
import {HomeComponent} from "./home/home.component";
import {CertificateComponent} from "./certificate/certificate.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'pairings/:id', component: PairingComponent},
  {path: 'certificates/:id', component: CertificateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
