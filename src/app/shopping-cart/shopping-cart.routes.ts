import { Routes } from '@angular/router';
import { ShoppingCartComponent } from './shopping-cart.component';

export const SHOPPING_CART_ROUTES: Routes = [
    {
        path: 'shopping-cart',
        // canActivate:,
        component: ShoppingCartComponent
    }
];
