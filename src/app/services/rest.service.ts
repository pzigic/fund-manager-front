import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};


const endpoint = "http://localhost:8081/api/";

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }


  getRequest(url: string): Observable<any> {
    return this.http.get(endpoint + url);
  }

  postRequest(url: string, object: any): Observable<any> {
    return this.http.post(endpoint + url, JSON.stringify(object), httpOptions);
  }

}
