import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Pairing} from "../../models/pairing.model";

@Component({
  selector: 'app-pairing',
  templateUrl: './pairing.component.html',
  styleUrls: ['./pairing.component.css']
})
export class PairingComponent implements OnInit {
  pairing?: Pairing

  constructor(private router: Router) {
    this.pairing = router.getCurrentNavigation()?.extras.state as Pairing;
  }

  ngOnInit(): void {
  }
}
