import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http:HttpClient) { }

  getDrinks(name) {
    let url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`
    return this.http.get(url).toPromise()
  }
}
