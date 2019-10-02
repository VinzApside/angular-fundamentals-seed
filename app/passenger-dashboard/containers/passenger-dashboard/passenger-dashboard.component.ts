import { Component, OnInit } from "@angular/core";

import { Passenger } from "../../models/passenger-interface";

@Component({
  selector: "passenger-dashboard",
  styleUrls: ["passenger-dashboard.component.scss"],
  template: `
    <div>
      <h3>Airline Passenger</h3>
      <passenger-count [items]="passengers"></passenger-count>
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
  constructor() {}
  ngOnInit() {
    console.log("on init");
    this.passengers = [
      {
        id: 1,
        fullname: "Stephen",
        checkedIn: true,
        checkInDate: 149074200000,
        children: null
      },
      {
        id: 2,
        fullname: "Stephanie",
        checkedIn: false,
        children: [{ name: "Ted", age: 12 }]
      }
    ];
  }
  handleRemove(event) {
    console.log(event);
  }
  handleEdit(event) {
    console.log(event);
  }
}
