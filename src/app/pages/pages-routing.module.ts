import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesModule } from './categories/categories.module';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'categories',
    loadChildren: () =>
      import('./categories/categories.module').then((m) => m.CategoriesModule),
  },

  {
    path: 'listings',
    loadChildren: () =>
      import('./listings/listings.module').then((m) => m.ListingsModule),
  },
  {
    path: 'sell',
    loadChildren: () => import('./sell/sell.module').then((m) => m.SellModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
