import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service';

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


  products: Product[] = [];
    

  constructor(private productservice:ProductService) {
    this.products = this.productservice.getProduct();
  }

  onRatingClicked(message: string) {
    this.pageTitle = 'Product List: '+message;
  }

  ngOnInit() {
    console.log('In OnInit');
    
    this.filteredProducts = this.products;
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
