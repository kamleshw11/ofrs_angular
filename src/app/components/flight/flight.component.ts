import { HttpClient } from '@angular/common/http';
import { Component, OnInit ,ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs';
import { Flight } from 'src/app/interfaces/flight';
import { FlightService } from 'src/app/services/flight.service';
import {MatDialog} from '@angular/material/dialog';

import {MatFormFieldModule} from '@angular/material/form-field';
import { AddFlightComponent } from '../add-flight/add-flight.component';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.scss']
})
export class FlightComponent implements OnInit {
  displayedColumns: string[] = ['flightId', 'flightName', 'source', 'destination','departureDate','departureTime','arrivalDate','arrivalTime','stops','totalSeats','basePrice'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private flightService:FlightService,public dialog: MatDialog) { 
    
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddFlightComponent,{
      width:'60%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  flights: Flight[] = [];

  ngOnInit(): void {
    this.getAllFlights();

  }
     
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  
  getAllFlights() {
    this.flightService.getAllFlights().subscribe({
      next:(data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(data);
    },
    error:(err) => {
      alert("Erorr while fetching the records!");
     
    }
    });
  }
}
 

