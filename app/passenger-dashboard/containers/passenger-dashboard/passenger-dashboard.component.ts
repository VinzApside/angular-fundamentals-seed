import { Component, OnInit } from "@angular/core";

import { Passenger } from "../../models/passenger-interface";
import { PassengerDashboardService } from "../../passenger-dashboard.service";
import { Observable } from "rxjs/Observable";

@Component({
  selector: "passenger-dashboard",
  styleUrls: ["passenger-dashboard.component.scss"],
  template: `
    <div>
      <h3>Airline Passenger</h3>
      <passenger-count [items]="passengers"></passenger-count>
      <div *ngFor="let passenger of passengers">{{ passenger.fullname }}</div>
      <passenger-detail
        *ngFor="let passenger of passengers"
        [detail]="passenger"
        (edit)="handleEdit($event)"
        (remove)="handleRemove($event)"
      ></passenger-detail>
    </div>
  `
})
export class PassengerDashboardComponent implements OnInit {
  passengers: Passenger[];
  constructor(private passengerService: PassengerDashboardService) {}
  ngOnInit() {
    this.passengerService
      .getPassengers()
      .then((data: Passenger[]) => (this.passengers = data));
  }
  handleRemove(event) {
    this.passengerService
      .removePassengers(event)
      .subscribe((data: Passenger) => {
        this.passengers = this.passengers.filter((passenger: Passenger) => {
          return passenger.id != event.id;
        });
      });
  }
  handleEdit(event: Passenger) {
    this.passengerService
      .updatePassengers(event)
      .subscribe((data: Passenger) => {
        this.passengers = this.passengers.map((passenger: Passenger) => {
          if (passenger.id === event.id) {
            passenger = Object.assign({}, passenger, event);
          }
          return passenger;
        });
      });

    console.log(this.passengers);
  }
}
