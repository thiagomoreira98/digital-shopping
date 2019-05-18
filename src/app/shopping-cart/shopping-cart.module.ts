import { NgModule } from '@angular/core';
import { SharedModule } from '../shared.module';
import { ShoppingCartComponent } from './shopping-cart.component';
import { DialogConfirmComponent } from './dialog-confirm/dialog-confirm.component';

@NgModule({
    declarations: [
        ShoppingCartComponent,
        DialogConfirmComponent
    ],
    imports: [
        SharedModule
    ],
    entryComponents: [
        DialogConfirmComponent
    ],
    exports: [],
    providers: [],
})
export class ShoppingCartModule {
}
