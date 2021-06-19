import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  version: string;
  credit: string;

  constructor() {
    this.version = environment.VERSION;
    this.credit = environment.CREDIT; }

  ngOnInit(): void {
  }

}
