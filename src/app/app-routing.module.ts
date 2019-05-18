import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

// Routes
import { HOME_ROUTES } from './home/home.routes';
import { PRODUCTS_ROUTES } from './products/products.routes';
import { SHOPPING_CART_ROUTES } from './shopping-cart/shopping-cart.routes';

const routes: Routes = [{
  path: '',
  component: AppComponent,
  children: [
    ...HOME_ROUTES,
    ...PRODUCTS_ROUTES,
    ...SHOPPING_CART_ROUTES
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
