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
  searchTerm = '';
  selectedCategory = '';

  get categories(): string[] {
    return [...new Set(this.products.map(p => p.category))];
  }

  constructor(
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
      this.filtered = data;
    });
  }

  applyFilter(): void {
    this.filtered = this.products.filter(p => {
      const matchesName =
        !this.searchTerm ||
        p.name.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesCategory =
        !this.selectedCategory || p.category === this.selectedCategory;
      return matchesName && matchesCategory;
    });
  }

  clearFilter(): void {
    this.searchTerm = '';
    this.selectedCategory = '';
    this.filtered = [...this.products];
  }

  goToDetail(product: Product): void {
    this.router.navigate(['/products', product.id]);
  }
}
