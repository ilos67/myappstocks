import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  // {path: 'test-error', component: TestErrorComponent},
  // {path: 'server-error', component: ServerErrorComponent},
  // {path: 'not-found', component: NotFoundComponent},
  { path: 'shop', loadChildren: () => import('./shop/shop.module').then(mod => mod.ShopModule)},
  { path: 'account', loadChildren: () => import('./account/account.module').then(mod => mod.AccountModule)},
  { path: '**', redirectTo: '', pathMatch: 'full'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
