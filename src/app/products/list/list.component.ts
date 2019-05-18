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
}