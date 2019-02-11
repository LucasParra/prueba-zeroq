import { Component } from '@angular/core';
import { OficinaService } from 'src/app/service/oficina/oficina.service';
import { Oficina } from 'src/app/interface/oficina';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {

  oficinasFiltered: Array<Oficina> = [];

  oficinas: Array<Oficina[]> = [];
  searchText = '';

  constructor(private oficinaService: OficinaService) {
    this.oficinaService.getOficinas().subscribe((oficinas) => {
      this.oficinasFiltered = oficinas;
      this.ordenarOficinas(oficinas);
    });
  }
  ordenarOficinas(oficinas: Array<Oficina>) {
    let i = 0;
    this.oficinas[i] = [];
    for (const oficina of this.oficinasFiltered) {
      oficina.active = true;
      if (this.oficinas[i].length <= 3) {
        this.oficinas[i].push(oficina);
      } else {
        i++;
        this.oficinas[i] = [oficina];
      }
    }
  }
  search() {
    for (const oficina of this.oficinasFiltered) {
      if (this.searchText.length > 0 ? (oficina.name.toLowerCase().indexOf(
        this.searchText.toLocaleLowerCase()) === -1) : false
        ) {
        oficina.active = false;
      } else {
        oficina.active = true;
      }
    }
  }
}
