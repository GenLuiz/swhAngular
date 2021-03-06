import { Product } from './../../models/product.model';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product-service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  
  products : Product[] = [];

  constructor(private productService:ProductService) { }

  ngOnInit() {
    this.getProducts();
  } 
  
  getProducts():void{
    this.productService.getProducts().then(products => this.products = products);
  }
}
