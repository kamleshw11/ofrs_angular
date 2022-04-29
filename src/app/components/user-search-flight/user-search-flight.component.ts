import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl,Form, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
// 
@Component({
  selector: 'app-user-search-flight',
  templateUrl: './user-search-flight.component.html',
  styleUrls: ['./user-search-flight.component.scss'],
 
})
export class UserSearchFlightComponent implements OnInit {
  // options: FormGroup;
  source = "";
  destination="";
  passengerCount=""
   
  ngOnInit(): void {
  }

  
}
