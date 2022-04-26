import { Time } from "@angular/common";

export interface Flight {
    flightId:number;
    flightName: string;
    source:string;
    destination:string;
    departureDate:Date;
    departureTime:Time;
    arrivalDate:Date;
    arrivalTime:Time;
    stops:number;
    totalSeats:number;
    feedback:string;
    basePrice:number
}
