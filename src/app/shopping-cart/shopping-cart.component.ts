import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatDialog, MatSnackBar } from '@angular/material';
import { ShoppingCartService } from './shopping-cart.service';
import { DialogConfirmComponent } from './dialog-confirm/dialog-confirm.component';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  loading: boolean;
  displayedColumns: string[] = ['id', 'nomeProduto', 'nomeCategoria', 'quantidade', 'actions'];
  dataSource = new MatTableDataSource();

  constructor(
    private service: ShoppingCartService,
    public dialog: MatDialog,
    private snackbar: MatSnackBar
  ) { }

  ngOnInit() {
    this.get();
  }

  get(nomeProduto?: string) {
    if (this.loading) {
      return;
    }

    this.loading = true;

    this.service.get(nomeProduto).subscribe((res: any) => {
      this.dataSource = new MatTableDataSource(res.content);
      this.dataSource.paginator = this.paginator;
      this.loading = false;
    }, (err) => {
      this.loading = false;
      this.snackbar.open('Ocorreu um erro ao buscar os produtos', 'Fechar', {
        duration: 3000
      });
    });
  }

  removeById(id: number) {
    this.service.removeById(id).subscribe((res: any) => {
      this.dataSource = new MatTableDataSource(res.content);
      this.snackbar.open('Removido com sucesso', 'Fechar', {
        duration: 3000
      });
    }, (err) => {
      this.snackbar.open('Ocorreu um erro ao remover o item do carrinho', 'Fechar', {
        duration: 3000
      });
    });
  }

  removeAll() {
    this.service.removeAll().subscribe((res: any) => {
      this.dataSource = new MatTableDataSource([]);
      this.snackbar.open('Removidos com sucesso', 'Fechar', {
        duration: 3000
      });
    }, (err) => {
      this.snackbar.open('Ocorreu um erro ao limpar o carrinho', 'Fechar', {
        duration: 3000
      });
    });
  }

  openDialog() {
    this.dialog.open(DialogConfirmComponent, {
      width: '450px'
    });
  }

}
