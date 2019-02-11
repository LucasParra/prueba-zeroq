import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Oficina } from 'src/app/interface/oficina';
import { main } from 'src/endPoints';

@Injectable({
  providedIn: 'root'
})
export class OficinaService {

  constructor(private http: HttpClient) { }
  getOficinas() {
    return this.http.get<Oficina[]>(main);
  }
}
