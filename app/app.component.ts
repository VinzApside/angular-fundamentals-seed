import { Component } from "@angular/core";

interface Child {
  name: string;
  age: number;
}

interface Passenger {
  id: number;
  fullname: string;
  checkedIn: boolean;
  checkInDate?: number;
  children: Child[] | null;
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
          <p>{{ passenger | json }}</p>
          <div class="date">
            Check in date :
            {{
              passenger.checkInDate
                ? (passenger.checkInDate | date: "yMMMMd" | uppercase)
                : "Not checked in"
            }}
            <div>Children: {{ passenger.children?.length || 0 }}</div>
          </div>
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

  handleChange(value: string) {
    console.log(value);
    this.name = value;
  }
  constructor() {
    this.title = "Airline passengers";
  }
}
