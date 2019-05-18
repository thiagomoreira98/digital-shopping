import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from '../../categories/categories.service';
import { ProductsService } from '../products.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class ProductsDetailComponent implements OnInit {

  info: any;
  categories: any[];
  addingNew: boolean;
  loading: boolean;
  saving: boolean;

  constructor(
    private route: ActivatedRoute,
    private service: ProductsService,
    private categorieService: CategoriesService,
    private snackbar: MatSnackBar
  ) {
    this.info = {};
    this.categories = [];
  }

  ngOnInit() {
    this.route.params.subscribe(param => {
      if (param['id']) {
        this.addingNew = false;
        this.get(param['id']);
      } else {
        this.addingNew = true;
      }
    });

    this.getAllCategories();
  }

  getAllCategories() {
    this.categorieService.getAll().subscribe((res: any) => {
      this.categories = res.content;
    }, (err) => {
      this.snackbar.open('Ocorreu um erro ao buscar as categorias', 'Fechar', {
        duration: 3000
      });
    });
  }

  get(id) {
    this.loading = true;
    this.service.getById(id).subscribe((res: any) => {
      this.info = res.content;
      this.loading = false;
    }, (err) => {
      this.loading = false;
      this.snackbar.open('Ocorreu um erro ao buscar o produto', 'Fechar', {
        duration: 3000
      });
    });
  }

  onSubmit(form) {
    if (this.saving) {
      return;
    }

    if (!form.valid) {
      return;
    }

    if (!this.info.idCategoria) {
      return this.snackbar.open('Selecione uma categoria', 'Fechar', {
        duration: 3000
      });
    }

    this.saving = true;

    this.service[this.info.id ? 'update' : 'create'](this.info).subscribe(() => {
      this.saving = false;
      this.snackbar.open(`${this.info.id ? 'Alterado' : 'Cadastrado'} com sucesso`, 'Fechar', {
        duration: 3000
      });
    }, (err) => {
      this.saving = false;
      this.snackbar.open(`Ocorreu um erro ao ${this.info.id ? 'Alterar' : 'Cadastrar'}`, 'Fechar', {
        duration: 3000
      });
    });
  }

}
