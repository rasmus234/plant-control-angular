import {Component, OnInit} from '@angular/core';
import {Pairing} from "../../models/pairing.model";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {firstValueFrom} from "rxjs";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pairings?: Pairing[]
  selectedPairing?: Pairing[]

  constructor(private router: Router, private http: HttpClient) {
  }

  async ngOnInit(): Promise<void> {
    this.pairings = await firstValueFrom(this.http.get<Pairing[]>(environment.api + 'pairings'));
  }

  async onSelectionChange(): Promise<void> {
    if (this.selectedPairing) {
      await this.router.navigate(['pairing'], {state: this.selectedPairing[0]});
    }
  }
}
