import { NgModule } from '@angular/core';
import { SharedModule } from '../shared.module';
import { ProductsComponent } from './products.component';
import { ProductsListComponent } from './list/list.component';
import { ProductsDetailComponent } from './detail/detail.component';

@NgModule({
    declarations: [
        ProductsComponent,
        ProductsListComponent,
        ProductsDetailComponent
    ],
    imports: [
        SharedModule
    ],
    exports: [],
    providers: [],
})
export class ProductsModule {
}
