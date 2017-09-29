import { Product } from './../models/product.model';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class ProductService {
    private productUrl = 'api/products';

    private headers = new Headers({ 'Content-Type': 'application/json' })

    constructor(private http: Http) { }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

    getProducts(): Promise<Product[]> {
        return this.http.get(this.productUrl)
            .toPromise().then(response => response.json().data as Product[])
            .catch(this.handleError);
    }

    

}