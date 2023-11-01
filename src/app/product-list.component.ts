import { Component } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product-list',
  template: `
    <h2>Lista de Productos</h2>
    <ul>
      <li *ngFor="let product of products; let i = index">
        {{ product.name }} <br>
         - ID: {{ product.id }} <br>
         - Precio: {{ product.price }} <br>
         - Cantidad: {{ product.cantidad }} <br>
        <button (click)="deleteProduct(i)">Eliminar</button>
      </li>
    </ul>
    <input [(ngModel)]="newProduct.name" placeholder="Nuevo Producto"><br>
    <input [(ngModel)]="newProduct.id" type="number" placeholder="ID"><br>
    <input [(ngModel)]="newProduct.price" type="number" placeholder="Precio Unidad"><br>
    <input [(ngModel)]="newProduct.cantidad" type="number" placeholder="Cantidad"><br>
    <button (click)="addProduct()">Agregar</button>
  `
})
export class ProductListComponent {
  products: any[] = [];
  newProduct: any = {
    name: '',
    id: null,
    price: null,
    cantidad: null
  };

  constructor(private productService: ProductService) {
    this.products = this.productService.getProducts();
  }

  addProduct() {
    if (this.newProduct.name.trim() !== '' && this.newProduct.id !== null && this.newProduct.price !== null && this.newProduct.cantidad !== null) {
      this.productService.addProduct(this.newProduct);
      this.newProduct = { name: '', id: null, price: null, cantidad: null };
    }
  }

  deleteProduct(index: number) {
    this.productService.deleteProduct(index);
  }
}
