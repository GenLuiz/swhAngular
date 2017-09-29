import { Contact } from './contact.model';
import { Address } from './address.model';
export class User{
    public name: string;
    public email: string;
    public password: string;
    public cpf: string;
    public bornDate: Date;
    public isAdminLevel: boolean;
    public address: Address;
    public contact: Contact;
}