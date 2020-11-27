import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './shop.component';

const routes: Routes = [
  // {path: 'shop', component: ShopComponent},
  // {path: 'shop/:id', component: ProductDetailComponent},
  {path: '', component: ShopComponent},
  // {path: ':id', component: ProductDetailComponent, data: {breadcrumb: {alias: 'productDetails'}}},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
