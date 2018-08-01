import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-list/product-detail.component';

const routes: Routes = [

    {path: 'welcome', component: WelcomeComponent},
    {path: '', redirectTo: 'welcome' ,pathMatch: 'full'},
    {path: 'product', component:ProductListComponent},
    {path: 'product/:id', component:ProductDetailComponent},
    {path: '**', redirectTo: 'welcome',pathMatch: 'full'}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
