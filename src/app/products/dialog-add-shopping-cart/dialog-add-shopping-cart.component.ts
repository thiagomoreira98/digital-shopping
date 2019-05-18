import { Component, Inject } from '@angular/core';
import { MatSnackBar, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ShoppingCartService } from '../../shopping-cart/shopping-cart.service';

@Component({
    selector: 'app-dialog-add-shopping-cart',
    templateUrl: 'dialog-add-shopping-cart.component.html',
})
export class DialogAddShoppingCartComponent {

    saving: boolean;
    quantidade: number;

    constructor(
        private service: ShoppingCartService,
        private snackbar: MatSnackBar,
        public dialog: MatDialogRef<DialogAddShoppingCartComponent>,
        @Inject(MAT_DIALOG_DATA) public product: any
    ) { }

    save(form) {
        if (this.saving) {
            return;
        }

        if (!form.valid) {
            return;
        }

        this.saving = true;

        const item = {
            idProduto: this.product.id,
            quantidade: this.quantidade
        };

        this.service.addToCart(item).subscribe(() => {
            this.snackbar.open('Adicionado ao carrinho com sucesso', 'Fechar', {
                duration: 3000
            });
            this.dialog.close();
        }, (err) => {
            this.snackbar.open('Ocorreu um erro ao adicionar no carrinho', 'Fechar', {
                duration: 3000
            });
        }, () => {
            this.saving = false;
        });
    }
}