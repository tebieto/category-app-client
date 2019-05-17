import { Injectable } from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import {throwError} from 'rxjs';
import { map, retryWhen, delay, take, concatMap, catchError} from 'rxjs/operators';



import {Config} from '../../config';
import { Category } from './category.model';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  baseUrl = Config.apiUrl + "category"

  constructor(private http: Http) { }

  create(category:Category){
    
    return this.http.post(
      this.baseUrl,
      JSON.stringify({
        category_title: category.title,
        category_parent: category.parent,
        action: 'create'
      }),
      {headers:this.getCommonHeaders()}
    ).pipe(
      map(res => res.json()),
      map(data => {
          let category = [];
          data.forEach((data) => {
              category.push(data);
          });
          return category;
      }),
      retryWhen(errors => errors.pipe(take(5), delay(1000), concatMap(this.handleErrors))),
 
    );
  }

  getCommonHeaders(){
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    return headers
  }

  handleErrors(error: Response) {
    return throwError(error);
}



}
