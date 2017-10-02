import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const products = [
      {  id: 1, name: "apple", shortName: "ap", description: "this is a test",
        price: 10, promoPrice: null, isProductKit: false, category: {id: 1, type : "test"} ,
        image: {id: 1, imgPath: ""}
      }
    ];
    return {products};
  }
}