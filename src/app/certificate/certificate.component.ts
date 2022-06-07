import { Component, OnInit } from '@angular/core';
import {Certificate} from "../../models/certificate.model";
import {firstValueFrom} from "rxjs";
import {environment} from "../../environments/environment";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.css']
})
export class CertificateComponent implements OnInit {
  certificate?: Certificate

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) { }

  async ngOnInit(): Promise<void> {
    let id = (await firstValueFrom(this.route.params))['id'];

    this.http.get<Certificate>(environment.api + 'certificates/' + id).subscribe({
      next: certificate => this.certificate = certificate,
      error: () => this.router.navigate(['/'])
    })
  }

  print(): void {
    window.print();
  }
}
