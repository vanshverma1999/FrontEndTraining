import { Injectable } from '@angular/core';
import {HttpClientModule,HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private http:HttpClient) { }

  getData(){
    return this.http.get("https://jsonplaceholder.typicode.com/posts");
  }
  
}
