import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private readonly http:HttpClient) { }

  getDataFromApi(){
    return this.http.get<any>('https://api.nbp.pl/api/exchangerates/tables/a/?format=json')
  }
}
