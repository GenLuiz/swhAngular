import { Product } from './product.model';
export class OrderItem{
    public id: number;
    public cartId: string;
    public quantity: number;
    public addDate: Date;
    public product: Product;
}