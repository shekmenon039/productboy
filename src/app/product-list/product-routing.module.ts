import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailGuard } from './product-detail.guard';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';

const routes: Routes = [
  {
    path: 'product',
    component: ProductListComponent
  },
  {
    path: 'product/:id',
    canActivate: [ProductDetailGuard],
    component: ProductDetailComponent
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
