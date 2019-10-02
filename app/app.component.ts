import { Component } from "@angular/core";

interface Passenger {
  id: number;
  fullname: string;
  checkedIn: boolean;
}

@Component({
  selector: "app-root",
  styleUrls: ["app.Component.scss"],
  template: `
    <div class="app">
      <h1 [innerHTML]="title"></h1>
      <div *ngIf="name.length > 2">Searching for ...{{ name }}</div>

      <ul>
        <li *ngFor="let passenger of passengers; let i = index">
          <span class="status" [class.checked-in]="passenger.checkedIn"></span>
          {{ i }} : {{ passenger.fullname }}
        </li>
      </ul>
    </div>

    <h1 [innerHTML]="title"></h1>
    <div>
      <ul>
        <li *ngFor="let passenger of passengers; let i = index">
          <span
            class="status"
            [ngClass]="{
              'checked-in': passenger.checkedIn,
              'checked-out': !passenger.checkedIn
            }"
          ></span>
          {{ i }} : {{ passenger.fullname }}
        </li>
      </ul>
    </div>
  `
})
export class AppComponent {
  title: string;
  name: string = "";
  passengers: Passenger[] = [
    {
      id: 1,
      fullname: "Stephen",
      checkedIn: true
    },
    {
      id: 2,
      fullname: "Stephanie",
      checkedIn: false
    }
  ];

  handleChange(value: string) {
    console.log(value);
    this.name = value;
  }
  constructor() {
    this.title = "Airline passengers";
  }
}
