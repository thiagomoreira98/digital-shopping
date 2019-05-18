import { NgModule } from '@angular/core';
import { SharedModule } from '../shared.module';
import { ProductsComponent } from './products.component';
import { ProductsListComponent } from './list/list.component';
import { ProductsDetailComponent } from './detail/detail.component';
import { DialogAddShoppingCartComponent } from './dialog-add-shopping-cart/dialog-add-shopping-cart.component';

@NgModule({
    declarations: [
        ProductsComponent,
        ProductsListComponent,
        ProductsDetailComponent,
        DialogAddShoppingCartComponent
    ],
    imports: [
        SharedModule
    ],
    entryComponents: [
        DialogAddShoppingCartComponent
    ],
    exports: [],
    providers: [],
})
export class ProductsModule {
}
