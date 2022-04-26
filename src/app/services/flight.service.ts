import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Flight } from '../interfaces/flight';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  private apiServiceUrl=environment.apiBaseUrl;

  constructor(private http:HttpClient) { }
  
  public getAllFlights():Observable<Flight[]> {
    return this.http.get<Flight[]>(`${this.apiServiceUrl}/flight/getAllFlights`);
    
  }

  public addFlight(flight:Flight):Observable<Flight> {
    return this.http.post<Flight>(`${this.apiServiceUrl}/flight/addFlight`,flight);
    
  }

  public updateFlight(flight:Flight):Observable<Flight> {
    return this.http.put<Flight>(`${this.apiServiceUrl}/flight/updateFlight`,flight);
    
  }

  public deleteFlight(flightId:number):Observable<void> {
    return this.http.delete<void>(`${this.apiServiceUrl}/flight/deleteFlight/${flightId}`);
    
  }
}
