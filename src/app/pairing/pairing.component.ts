import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Pairing} from "../../models/pairing.model";
import {firstValueFrom} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-pairing',
  templateUrl: './pairing.component.html',
  styleUrls: ['./pairing.component.css']
})
export class PairingComponent implements OnInit {
  pairing?: Pairing

  constructor(private route: ActivatedRoute, private http: HttpClient) {
  }

  async ngOnInit(): Promise<void> {
    let id = (await firstValueFrom(this.route.params))['id'];
    this.pairing = await firstValueFrom(this.http.get<Pairing>(environment.api + 'pairings/' + id));
  }
}
