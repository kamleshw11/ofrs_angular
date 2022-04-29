import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.scss']
})
export class AddFlightComponent implements OnInit {
  flightForm!: FormGroup

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.flightForm=this.formBuilder.group({      
      carrier:['',Validators.required],
      flightName:['',Validators.required],
      source:['',Validators.required],
      destination:['',Validators.required],
      depatureDate:['',Validators.required],
      depatureTime:['',Validators.required],
      arrivalDate:['',Validators.required],
      arrivalTime:['',Validators.required],
      totalSeats:['',Validators.required],
      stops:['',Validators.required],
      basePrice:['',Validators.required],            
    });
  }
}
