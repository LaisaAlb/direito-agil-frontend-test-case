import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../../core/services/product.service';
import { Product } from '../../core/models/product.model';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  form!: FormGroup;
  product!: Product;
  showSuccessModal = false;
  isSaving = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.productService.getProductById(id).subscribe(prod => {
      if (prod) {
        this.product = prod;
        this.form = this.fb.group({
          name: [prod.name, Validators.required],
          category: [prod.category, Validators.required],
          price: [prod.price, [Validators.required, Validators.min(0)]],
          stock: [prod.stock, [Validators.required, Validators.min(0)]],
          description: [prod.description, Validators.required]
        });
      }
    });
  }

  save(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.isSaving = true;
    const updatedProduct: Product = { ...this.product, ...this.form.value };

    setTimeout(() => {
      this.productService.updateProduct(updatedProduct);
      this.isSaving = false;
      this.showSuccessModal = true;
    }, 1200);
  }

  closeSuccessModal(): void {
    this.showSuccessModal = false;
    this.router.navigate(['/products', this.product.id]);
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }
}
