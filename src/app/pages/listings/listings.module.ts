import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListingsRoutingModule } from './listings-routing.module';
import { ListingComponent } from './listing/listing.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ListingComponent],
  imports: [SharedModule, CommonModule, ListingsRoutingModule],
})
export class ListingsModule {}
