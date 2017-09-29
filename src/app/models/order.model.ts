import { User } from './user.model';
export class Order{
    public id: number;
    public cartId: string;
    public status: string;
    public user: User;
    public orderDate: Date;
    public qualification: number;
    public feedback: string;
}