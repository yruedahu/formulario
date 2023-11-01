import { Component } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product-update',
  template: `
    <h2>Actualizar Producto por ID</h2>
    <input [(ngModel)]="updateProduct.id" type="number" placeholder="ID a actualizar"><br>
    <input [(ngModel)]="updateProduct.name" placeholder="Nuevo Nombre"><br>
    <input [(ngModel)]="updateProduct.price" type="number" placeholder="Nuevo Precio Unidad"><br>
    <input [(ngModel)]="updateProduct.cantidad" type="number" placeholder="Nueva Cantidad"><br>
    <button (click)="updateProductById()">Actualizar Producto</button>
  `
})
export class ProductUpdateComponent {
  updateProduct: any = {
    id: null,
    name: '',
    price: null,
    cantidad: null
  };

  constructor(private productService: ProductService) {}

  updateProductById() {
    const id = this.updateProduct.id;
    if (id !== null && id >= 0) {
      this.productService.updateProduct(id, this.updateProduct);
      this.updateProduct = { id: null, name: '', price: null, cantidad: null };
    }
  }
}
