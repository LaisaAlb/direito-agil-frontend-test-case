import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductsListComponent } from './features/products-list/products-list.component';
import { ProductDetailComponent } from './features/product-detail/product-detail.component';
import { ProductNewComponent } from './features/product-new/product-new.component';
import { ProductEditComponent } from './features/product-edit/product-edit.component';
import { ConfirmationModalComponent } from './shared/confirmation-modal/confirmation-modal.component';
import { HeaderComponent } from './shared/header/header.component';

import { LucideAngularModule, RefreshCcw, Plus, Edit, Package, ArrowUpDown, ChevronUp, ChevronDown, Save, X, Pencil, Trash2, ArrowLeft  } from 'lucide-angular';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ProductDetailComponent,
    ProductNewComponent,
    ProductEditComponent,
    ConfirmationModalComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    LucideAngularModule.pick({ RefreshCcw, Plus, Edit, Package, ArrowUpDown, ChevronUp, ChevronDown, Save, X, Pencil, Trash2, ArrowLeft })
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
