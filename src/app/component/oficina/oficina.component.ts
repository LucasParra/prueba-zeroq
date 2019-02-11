import { Component, OnInit, Input } from '@angular/core';
import { Oficina } from 'src/app/interface/oficina';

import * as moment from 'moment';

@Component({
  selector: 'app-oficina',
  templateUrl: './oficina.component.html',
  styleUrls: ['./oficina.component.scss']
})
export class OficinaComponent implements OnInit {
  @Input() dataSource: Oficina;

  totalFila = 0;
  promedioAtencion = '';
  constructor() {}

  ngOnInit() {
    let acumSeg = 0;
    for (const key in this.dataSource.lines) {
      if (this.dataSource.lines.hasOwnProperty(key)) {
        const line = this.dataSource.lines[key];
        this.totalFila += line.waiting;
        acumSeg += line.elapsed;
      }
    }
    const formatedSeconds = moment().startOf('day').seconds(acumSeg).format('H:mm:ss');
    this.promedioAtencion = formatedSeconds;
  }

}
