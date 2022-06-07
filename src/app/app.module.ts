import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatTooltipModule} from "@angular/material/tooltip";
import {LayoutModule} from '@angular/cdk/layout';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatTabsModule} from "@angular/material/tabs";
import {HttpClientModule} from "@angular/common/http";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import { PairingComponent } from './pairing/pairing.component';
import { HomeComponent } from './home/home.component';
import { CertificateComponent } from './certificate/certificate.component';

@NgModule({
  declarations: [
    AppComponent,
    PairingComponent,
    HomeComponent,
    CertificateComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTabsModule,
    MatSelectModule,
    MatInputModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
