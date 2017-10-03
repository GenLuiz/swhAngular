import { Product } from './../models/product.model';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProductService {
    private productUrl = 'api/products';

    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private http: Http) { }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

    getProducts(): Promise<Product[]> {
        return this.http
            .get(this.productUrl)
            .toPromise()
            .then(response => response.json().data as Product[])
            .catch(this.handleError);
    }

    getProduct(id: number): Promise<Product> {
        const url = `${this.productUrl}/${id}`;
        return this.http
            .get(url)
            .toPromise()
            .then(response => response.json().data as Product)
            .catch(this.handleError);
    }

    updateProduct(product: Product): Promise<Product> {
        const url = `${this.productUrl}/${product.id}`;
        return this.http
            .put(url, JSON.stringify(product), { headers: this.headers })
            .toPromise()
            .then(() => product)
            .catch(this.handleError);
    }

    createProduct(product: Product): Promise<Product> {
        return this.http
            .post(this.productUrl, JSON.stringify(product), { headers: this.headers })
            .toPromise()
            .then(res => res.json().data as Product)
            .catch(this.handleError);
    }

    deleteProduct(id: number): Promise<void> {
        const url = `${this.productUrl}/${id}`;
        return this.http
            .delete(url, { headers: this.headers })
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }
}