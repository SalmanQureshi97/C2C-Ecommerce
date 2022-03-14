import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellRoutingModule } from './sell-routing.module';
import { SellFormComponent } from './sell-form/sell-form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailsFormComponent } from './details-form/details-form.component';
import { MeasurementsFormComponent } from './measurements-form/measurements-form.component';
import { PricingFormComponent } from './pricing-form/pricing-form.component';
import { ShippingFormComponent } from './shipping-form/shipping-form.component';
import { PhotosFormComponent } from './photos-form/photos-form.component';

@NgModule({
  declarations: [SellFormComponent, DetailsFormComponent, MeasurementsFormComponent, PricingFormComponent, ShippingFormComponent, PhotosFormComponent],
  imports: [
    SharedModule,
    CommonModule,
    SellRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class SellModule {}
