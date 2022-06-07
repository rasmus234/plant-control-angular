import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Pairing} from "../../models/pairing.model";
import {firstValueFrom} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Certificate} from "../../models/certificate.model";

@Component({
  selector: 'app-pairing',
  templateUrl: './pairing.component.html',
  styleUrls: ['./pairing.component.css']
})
export class PairingComponent implements OnInit {
  pairing?: Pairing

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) {
  }

  async ngOnInit(): Promise<void> {
    let id = (await firstValueFrom(this.route.params))['id'];

    this.http.get<Pairing>(environment.api + 'pairings/' + id).subscribe({
      next: pairing => this.pairing = pairing,
      error: () => this.router.navigate(['/'])
    })
  }

  async onGenerate(): Promise<void> {
    this.http.post<Certificate>(environment.api + 'certificates', {plantId: this.pairing?.plant._id}).subscribe({
      next: async certificate => {
        await this.router.navigate(['certificates', certificate._id]);
      }
    });
  }
}
