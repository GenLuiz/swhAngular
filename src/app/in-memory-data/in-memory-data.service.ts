import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const products = [
      {  id: 1, name: "apple", shortName: "ap", description: "this is a test",
        price: 10, promoPrice: null, isProductKit: false, category: {id: 1, type : "test"} ,
        image: {id: 1, imgPath: ""}
      },
       {  id: 2, name: "choco apple", shortName: "choc", description: "this is a test",
        price: 12, promoPrice: null, isProductKit: false, category: {id: 1, type : "test"} ,
        image: {id: 2, imgPath: ""}
      }
    ];
    const news = [
      {
        id:1, title:"News test", description: "just a test", date: Date.now
      }
    ];
    return {products, news};
  }
}