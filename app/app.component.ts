import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  styleUrls: ["app.Component.scss"],
  template: `
    <div class="app">
      <h1 [innerHTML]="title"></h1>
      <div>
        <input
          type="text"
          [ngModel]="name"
          (ngModelChange)="handleChange($event)"
        />
      </div>
      <div>{{ name }}</div>
      <button (click)="handleClick($event)">Change name</button>
    </div>
  `
})
export class AppComponent {
  title: string;
  name: string = "Todd";

  handleChange(value: string) {
    this.name = value;
  }
  handleClick(event: any) {
    this.name = "Name reset";
  }
  constructor() {
    this.title = "Say my name !";
  }
}
