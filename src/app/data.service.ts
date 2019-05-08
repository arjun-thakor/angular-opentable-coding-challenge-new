import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getRestaurants(city_name) {
    return this.http.get('http://opentable.herokuapp.com/api/restaurants?city=' + city_name)
  }
}
