import { Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { ProductsListComponent } from './list/list.component';
import { ProductsDetailComponent } from './detail/detail.component';

export const PRODUCTS_ROUTES: Routes = [
    {
        path: 'products',
        // canActivate:,
        component: ProductsComponent,
        children: [
            { path: '', component: ProductsListComponent },
            { path: 'new', component: ProductsDetailComponent },
            { path: ':id', component: ProductsDetailComponent },
        ]
    }
];
