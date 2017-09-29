import { Image } from './image.model';
import { Category } from './category.model';
export class Product{
    public id: number;
    public name: string;
    public shortName: string;
    public description: string;
    public price: number;
    public promoPrice: number;
    public isProductKit: boolean;
    public category: Category;
    public image: Image[];
}