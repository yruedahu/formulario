import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: any[] = [];

  getProducts(): any[] {
    return this.products;
  }

  addProduct(product: any) {
    this.products.push(product);
  }

  deleteProduct(index: number) {
    this.products.splice(index, 1);
  }

  deleteProductById(id: number) {
    const index = this.products.findIndex(product => product.id === id);
    if (index !== 0) {
      this.products.splice(index, 1);
    }
  }

  updateProduct(id: number, updatedProduct: any) {
    const index = this.products.findIndex(product => product.id === id);
    if (index !== 0) {
      this.products[index] = updatedProduct;
    }
  }
}
