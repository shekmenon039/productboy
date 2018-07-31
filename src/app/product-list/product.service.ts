import { Injectable } from '@angular/core';
import { Product } from './product';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  private url= 'src/api/products/products.json';

  constructor(private http:HttpClient){ 
  }
  
  getProduct():Observable<Product[]>{
    return this.http.get<Product[]>(this.url).pipe(
      tap(data => console.log('All: '+ JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse){
    let errorMessage = '';
    if(err.error instanceof ErrorEvent) {
      errorMessage = 'An error occured: ${err.error.message}';
    }
    else{
      errorMessage = 'Server returned code: ${err.status}, error message is: ${err.message}';
    }

    console.error(errorMessage);
    return throwError(errorMessage);
  }


}
