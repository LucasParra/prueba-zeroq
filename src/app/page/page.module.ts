import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponentModule } from '../component/component.module';
import { PageComponent } from './page/page.component';

const routes: Routes = [{
  path : '',
  component : PageComponent
}];

@NgModule({
  declarations: [ PageComponent ],
  imports: [
    ComponentModule,
    RouterModule.forChild(routes)
  ],
  providers: []
})
export class PageModule { }
