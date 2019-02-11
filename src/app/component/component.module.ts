import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { OficinaComponent } from './oficina/oficina.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    BodyComponent,
    OficinaComponent
  ],
  exports: [
    HeaderComponent,
    BodyComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ComponentModule { }
