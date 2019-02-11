import { Component, OnInit, Input } from '@angular/core';
import { Oficina } from 'src/app/interface/oficina';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() oficinas: Array<Oficina>;
  constructor() { }

  ngOnInit() {
  }

}
