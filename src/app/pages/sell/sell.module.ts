import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellRoutingModule } from './sell-routing.module';
import { SellFormComponent } from './sell-form/sell-form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SellFormComponent],
  imports: [
    SharedModule,
    CommonModule,
    SellRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class SellModule {}
