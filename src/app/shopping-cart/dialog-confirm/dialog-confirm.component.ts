import { Component } from '@angular/core';
import { MatSnackBar, MatDialogRef } from '@angular/material';
import { ShoppingCartService } from '../../shopping-cart/shopping-cart.service';

@Component({
    selector: 'app-dialog-confirm',
    templateUrl: 'dialog-confirm.component.html',
})
export class DialogConfirmComponent {

    saving: boolean;
    quantidade: number;

    constructor(
        private service: ShoppingCartService,
        private snackbar: MatSnackBar,
        public dialog: MatDialogRef<DialogConfirmComponent>,
    ) { }

    buy() {
        if (this.saving) {
            return;
        }

        this.saving = true;

        this.service.removeAll().subscribe(() => {
            this.snackbar.open('Compra efetuada com sucesso', 'Fechar', {
                duration: 3000
            });
            this.dialog.close();
            this.saving = false;
        }, (err) => {
            this.snackbar.open('Ocorreu um erro ao efetuar a compra', 'Fechar', {
                duration: 3000
            });
            this.saving = false;
        });
    }

    cancel() {
        this.dialog.close();
    }
}