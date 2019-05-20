import { Injectable, EventEmitter } from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import {throwError} from 'rxjs';
import { map, retryWhen, delay, take, concatMap, catchError, retry, tap} from 'rxjs/operators';



import {Config} from '../../config';
import { Category } from './category.model';


@Injectable({
  providedIn: 'root'
})


export class CategoryService {
  baseUrl = Config.apiUrl + "category"

  newCategory: Category

  constructor(private http: Http) { }

  newCategoryAlert = new EventEmitter<{}>();
  
  create(category:Category){
    
    let data = 
    "category_title="+ category.title+
    "&category_parent="+category.parent+
    "&category_id=0&action=create"
    
    return this.http.post(
      this.baseUrl,
      data,
      {headers:this.getCommonHeaders()}
    ).pipe(
      map(res => res.json()),
      map(data => {

          this.newCategory = data

          this.newCategoryAlert.emit(this.newCategory)
          
          return data;
      }),

       catchError(this.handleErrors)
    );
  }


  read() {
    
    let data = 
    "category_parent=0&category_id=0&action=read"
    
    return this.http.post(
      this.baseUrl,
      data,
      {headers:this.getCommonHeaders()}
    ).pipe(
      map(res => res.json()),
      map(data => {
          let category = []
          data.forEach(element => {
            category.push(element)
          });
          return category;
      }),

       catchError(this.handleErrors)
    );
  }


  getCommonHeaders(){
    let headers = new Headers();
    headers.append("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8");
    return headers
  }

  handleErrors(error: Response) {
    return throwError(error);
}



}
