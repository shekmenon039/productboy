import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  getProduct(): Product[]{
    return [
      {
        "productId": 2,
        "productName": "Garden Cart",
        "productCode": "GDN-0023",
        "releaseDate": "March 18,2016",
        "description": "15 gallon capacity",
        "price": 45.50,
        "starRating": 4.2,
        "imageUrl": 'https://openclipart.org/image/300px/svg_to_png/58471/garden-cart.png'
      },
      {
        "productId": 5,
        "productName": "Hammer",
        "productCode": "TBX-0048",
        "releaseDate": "May 21,2016",
        "description": "Curved claw steel hammer",
        "price": 15.50,
        "starRating": 4.9,
        "imageUrl": "https://openclipart.org/image/300px/svg_to_png/14358/mystica-Hammer.png"
      }
    ]
  }
}
