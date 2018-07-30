import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor() { }
  pageTitle = "Product List";
  products: any[] = [
    {
      "productId": 2,
      "productName": "Garden Cart",
      "productCode": "GDN-0023",
      "releaseDate": "March 18,2016",
      "description": "15 gallon capacity",
      "price": 32.99,
      "starRating": 4.2,
      "imageUrl": "https://openclipart.org"
    },
    {
      "productId": 5,
      "productName": "Hammer",
      "productCode": "TBX-0048",
      "releaseDate": "May 21,2016",
      "description": "Curved claw steel hammer",
      "price": 8.9,
      "starRating": 4.9,
      "imageUrl": "https://openclipart.org"
    }];
  ngOnInit() {
  }

}
