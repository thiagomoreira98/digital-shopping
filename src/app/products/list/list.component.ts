import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSnackBar } from '@angular/material';
import { ProductsService } from '../products.service';
import { ShoppingCartService } from 'src/app/shopping-cart/shopping-cart.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ProductsListComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  loading: boolean;
  saving: boolean;
  displayedColumns: string[] = ['id', 'nome', 'categoria', 'quantidade', 'actions'];
  dataSource = new MatTableDataSource();

  constructor(
    private service: ProductsService,
    private cartService: ShoppingCartService,
    private snackbar: MatSnackBar
  ) { }

  ngOnInit() {
    this.getAll();
  }

  getAll(nome?: string) {
    if (this.loading) {
      return;
    }

    this.loading = true;

    this.service.getAll(nome).subscribe((res: any) => {
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

  addToCart(product: any) {
    if (this.saving) {
      return;
    }

    if (product.carrinho) {
      return this.snackbar.open('Produto ja foi adicionado no carrinho. Verifique!', 'Fechar', {
        duration: 3000
      });
    }

    this.saving = true;

    this.cartService.addToCart(product.id).subscribe(() => {
      product.carrinho = true;
      this.saving = false;
      this.snackbar.open('Adicionado ao carrinho com sucesso', 'Fechar', {
        duration: 3000
      });
    }, (err) => {
      this.saving = false;
      this.snackbar.open('Ocorreu um erro ao adicionar no carrinho', 'Fechar', {
        duration: 3000
      });
    });
  }

  removeById(id: number) {
    this.service.removeById(id).subscribe((res: any) => {
      this.dataSource = new MatTableDataSource(res.content);
      this.loading = false;
      this.snackbar.open('Removido com sucesso', 'Fechar', {
        duration: 3000
      });
    }, (err) => {
      this.loading = false;
      this.snackbar.open('Ocorreu um erro ao remover o produto', 'Fechar', {
        duration: 3000
      });
    });
  }

  removeAll() {
    this.service.removeAll().subscribe((res: any) => {
      this.dataSource = new MatTableDataSource([]);
      this.loading = false;
      this.snackbar.open('Removidos com sucesso', 'Fechar', {
        duration: 3000
      });
    }, (err) => {
      this.loading = false;
      this.snackbar.open('Ocorreu um erro ao limpar a lista de compras', 'Fechar', {
        duration: 3000
      });
    });
  }
}