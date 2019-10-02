import { Component, OnInit } from "@angular/core";

import { Passenger } from "../../models/passenger-interface";

@Component({
  selector: "passenger-dashboard",
  styleUrls: ["passenger-dashboard.component.scss"],
  template: `
    <div>
      <h3>Airline Passenger</h3>
      <passenger-count [items]="passengers"></passenger-count>
      <passenger-detail></passenger-detail>
    </div>
    <div>
      <ul>
        <li *ngFor="let passenger of passengers; let i = index">
          <span class="status" [class.checked-in]="passenger.checkedIn"></span>
          {{ i }} : {{ passenger.fullname }}
          <div class="date">
            Check in date :
            {{
              passenger.checkInDate
                ? (passenger.checkInDate | date: "yMMMMd" | uppercase)
                : "Not checked in"
            }}
            <div>Children: {{ passenger.children?.length || 0 }}</div>
          </div>
          <p></p>
        </li>
      </ul>
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
}
