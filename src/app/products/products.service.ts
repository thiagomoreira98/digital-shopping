import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient
  ) { }

  getAll(nome?: string) {
    return this.http.get(`${environment.urlApi}/produtos?nome=${nome || ''}`);
  }

  getById(id: number) {
    return this.http.get(`${environment.urlApi}/produtos/${id}`);
  }

  create(product: any) {
    return this.http.post(`${environment.urlApi}/produtos`, product);
  }

  update(product: any) {
    return this.http.put(`${environment.urlApi}/produtos/${product.id}`, product);
  }
}
