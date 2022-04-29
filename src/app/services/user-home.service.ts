import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserHomeService {

  constructor(private http:HttpClient) { }

  usersearchFlight(source:string, destination:string, departureDate:Date){
    
  }
}
