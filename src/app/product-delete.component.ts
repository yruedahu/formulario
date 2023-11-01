import { Component } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product-delete',
  template: `
    <h2>Eliminar Producto</h2>
    <div>
      <input [(ngModel)]="deleteProductInput.id" type="number" placeholder="ID a eliminar"><br>
      <button (click)="deleteProductByIdentifier()">Eliminar por ID</button>
    </div>
    <div>
      <button (click)="deleteLastProduct()">Eliminar Último Producto</button>
    </div>
  `
})
export class ProductDeleteComponent {
  deleteProductInput: any = {
    id: null
  };

  constructor(private productService: ProductService) {}

  deleteLastProduct() {
    this.productService.deleteProduct(this.productService.getProducts().length - 1);
  }

  deleteProductByIdentifier() {
    const id = this.deleteProductInput.id;
    if (id !== null && id >= 0) {
      this.productService.deleteProductById(id);
    }
  }
}
