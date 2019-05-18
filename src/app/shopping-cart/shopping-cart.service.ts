import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(
    private http: HttpClient
  ) { }

  get(productName?: string) {
    return this.http.get(`${environment.urlApi}/carrinho?nomeProduto=${productName || ''}`);
  }

  addToCart(productId: number) {
    return this.http.post(`${environment.urlApi}/carrinho`, { idProduto: productId });
  }

  removeById(id: number) {
    return this.http.delete(`${environment.urlApi}/carrinho/${id}`);
  }

  removeAll() {
    return this.http.delete(`${environment.urlApi}/carrinho`);
  }
}
