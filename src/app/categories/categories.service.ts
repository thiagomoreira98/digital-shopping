import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(
    private http: HttpClient
  ) { }

  getAll(nome?: string) {
    return this.http.get(`${environment.urlApi}/categorias?nome=${nome || ''}`);
  }
}
