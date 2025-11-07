import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product.model';

const MOCK_PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Mouse Wireless',
    category: 'Periféricos',
    price: 120.9,
    stock: 15,
    description: 'Mouse sem fio com 1600 DPI.'
  },
  {
    id: 2,
    name: 'Teclado Mecânico',
    category: 'Periféricos',
    price: 350,
    stock: 8,
    description: 'Teclado mecânico ABNT2 com iluminação.'
  },
  {
    id: 3,
    name: 'Monitor 24"',
    category: 'Monitores',
    price: 899.99,
    stock: 5,
    description: 'Monitor Full HD 75Hz.'
  }
];

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getProducts(): Observable<Product[]> {
    return of(MOCK_PRODUCTS);
  }

  getProductById(id: number): Observable<Product | undefined> {
    return of(MOCK_PRODUCTS.find(p => p.id === id));
  }
}
