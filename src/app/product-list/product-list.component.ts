import { Component, OnInit } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  pageTitle = "Product List";
  imageWidth = 50;
  imageMargin = 2;
  showImage: boolean = false;
  filteredProducts: Product[];

  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }


  products: Product[] = [
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
    }];

  constructor() {
    this.filteredProducts = this.products;
  }

  onRatingClicked(message: string) {
    this.pageTitle = 'Product List: '+message;
  }

  ngOnInit() {
    console.log('In OnInit');
  }

  performFilter(filterBy: string): Product[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: Product) =>
      product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);

  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

}
