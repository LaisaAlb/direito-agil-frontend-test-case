import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../core/models/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product?: Product;
  isLoading = true;

  constructor(
    private router: Router,
  ) {}

  ngOnInit(): void {
    // TODO:
  }

  goBack(): void {
    this.router.navigate(['/products']);
  }
}
