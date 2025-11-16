import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../core/services/product.service';
import { Product } from '../../core/models/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  products: Product[] = [];
  filtered: Product[] = [];
  searchTerm = '';
  selectedCategory = '';
  sortColumn: string = '';
  sortDirection: 'asc' | 'desc' = 'asc';

  // tooltip
  tooltipX = 0;
  tooltipY = 0;
  showTooltip = false;

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
      this.filtered = [...data];
    });
  }

  get categories(): string[] {
    return [...new Set(this.products.map((p) => p.category))];
  }

  applyFilter(): void {
    this.filtered = this.products.filter((product) => {
      const nameMatch = product.name
        .toLowerCase()
        .includes(this.searchTerm.toLowerCase());
      const categoryMatch = this.selectedCategory
        ? product.category === this.selectedCategory
        : true;
      return nameMatch && categoryMatch;
    });
    if (this.sortColumn) {
      this.sortBy(this.sortColumn as keyof Product, true);
    }
  }

  clearFilter(): void {
    this.searchTerm = '';
    this.selectedCategory = '';
    this.filtered = [...this.products];
    if (this.sortColumn) {
      this.sortBy(this.sortColumn as keyof Product, true);
    }
  }

  sortBy(column: keyof Product, keepDirection = false): void {
    if (!keepDirection) {
      if (this.sortColumn === column) {
        this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
      } else {
        this.sortDirection = 'asc';
      }
    }
    this.sortColumn = column;

    this.filtered.sort((a, b) => {
      let valueA = a[column];
      let valueB = b[column];

      if (typeof valueA === 'number' && typeof valueB === 'number') {
        return this.sortDirection === 'asc' ? valueA - valueB : valueB - valueA;
      }

      return this.sortDirection === 'asc'
        ? String(valueA).localeCompare(String(valueB))
        : String(valueB).localeCompare(String(valueA));
    });
  }

  goToDetail(product: Product): void {
    this.router.navigate(['/products', product.id]);
  }

  // Tooltip
  onMouseMove(event: MouseEvent) {
    this.tooltipX = event.pageX + 15;
    this.tooltipY = event.pageY + 15;
  }

  onMouseEnterRow() {
    this.showTooltip = true;
  }

  onMouseLeaveRow() {
    this.showTooltip = false;
  }
}
