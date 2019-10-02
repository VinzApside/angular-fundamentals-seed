import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  styleUrls: ["app.Component.scss"],
  template: `
    <div class="app">
      {{ title }}
    </div>
  `
})
export class AppComponent {
  title: string;
  constructor() {
    this.title = "Ultimate Angular";
  }
}
