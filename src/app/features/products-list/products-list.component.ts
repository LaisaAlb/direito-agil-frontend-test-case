import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../core/services/product.service';
import { Product } from '../../core/models/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products: Product[] = [];
  filtered: Product[] = [];

  // TODO: implementar searchTerm e selectedCategory para o filtro
  searchTerm = '';
  selectedCategory = '';

  // TODO: usar essa lista de categorias no select de filtro
  get categories(): string[] {
    return [...new Set(this.products.map(p => p.category))];
  }

  constructor(
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Carrega a lista inicial de produtos
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
      this.filtered = data;
    });
  }

  applyFilter(): void {
    // TODO:
  }

  clearFilter(): void {
    // TODO:
  }

  goToDetail(product: Product): void {
    // TODO:
  }
}
