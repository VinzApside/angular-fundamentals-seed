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
      <div>
        <input
          type="text"
          #username
          (input)="handleChange($event.target.value)"
        />
      </div>
      <template [ngIf]="name.length > 2">
        <div>Searching for ...{{ name }}</div>
      </template>

      <div *ngIf="name.length > 2">Searching for ...{{ name }}</div>

      <ul>
        <li *ngFor="let passenger of passengers; let i = index">
          {{ i }} : {{ passenger.fullname }}
        </li>
      </ul>

      <ul>
        <template ngFor let-passenger let-i="index" [ngForOf]="passengers">
          <li>{{ i }} : {{ passenger.fullname }}</li>
        </template>
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
      fullname: "Stephanine",
      checkedIn: false
    }
  ];

  handleChange(value: string) {
    console.log(value);
    this.name = value;
  }
  constructor() {
    this.title = "Say the value !";
  }
}
