import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl,Form, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

@Component({
  selector: 'app-user-search-flight',
  templateUrl: './user-search-flight.component.html',
  styleUrls: ['./user-search-flight.component.scss']
})
export class UserSearchFlightComponent implements OnInit {

  campaignOne: FormGroup;
  campaignTwo: FormGroup;
  constructor() {
    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear();

    this.campaignOne = new FormGroup({
      start: new FormControl(new Date(year, month, 13)),
      end: new FormControl(new Date(year, month, 16)),
    });

    this.campaignTwo = new FormGroup({
      start: new FormControl(new Date(year, month, 15)),
      end: new FormControl(new Date(year, month, 19)),
    });
   }

   selected = new FormControl('valid', [Validators.required, Validators.pattern('valid')]);

   selectFormControl = new FormControl('valid', [Validators.required, Validators.pattern('valid')]);
 
   nativeSelectFormControl = new FormControl('valid', [
     Validators.required,
     Validators.pattern('valid'),
   ]);
 
   matcher = new ErrorStateMatcher();
   
  ngOnInit(): void {
  }
}
