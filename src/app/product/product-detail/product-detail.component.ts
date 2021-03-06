import { Product } from './../../models/product.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  @Input() element: Product;
  
  constructor() { }

  ngOnInit() {
  }

}
