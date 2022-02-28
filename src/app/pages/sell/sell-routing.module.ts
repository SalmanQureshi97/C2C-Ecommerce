import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SellFormComponent } from './sell-form/sell-form.component';

const routes: Routes = [
  {
    path: '',
    component: SellFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SellRoutingModule {}
