import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list.component';
import { ProductUpdateComponent } from './product-update.component'; 
import { ProductDeleteComponent } from './product-delete.component';
import { ProductService } from './product.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductUpdateComponent,
    ProductDeleteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ProductService],  
  bootstrap: [AppComponent]
})
export class AppModule { }
