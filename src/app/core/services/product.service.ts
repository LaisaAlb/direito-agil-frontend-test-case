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

  createProduct(product: Product): Observable<Product> {
    const newId = MOCK_PRODUCTS.length
      ? Math.max(...MOCK_PRODUCTS.map(p => p.id)) + 1
      : 1;

    const newProduct = { ...product, id: newId };

    MOCK_PRODUCTS.push(newProduct);

    return of(newProduct);
  }

  updateProduct(updated: Product) {
    const index = MOCK_PRODUCTS.findIndex(p => p.id === updated.id);
    if (index !== -1) {
      MOCK_PRODUCTS[index] = updated;
    }
  }

  deleteProduct(id: number) {
    const index = MOCK_PRODUCTS.findIndex(p => p.id === id);
    if (index !== -1) {
      MOCK_PRODUCTS.splice(index, 1);
    }
  }
}