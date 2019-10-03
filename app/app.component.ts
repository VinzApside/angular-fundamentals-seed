import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  styleUrls: ["app.Component.scss"],
  template: `
    <div class="app">
      <nav class="nav">
        <a
          routerLink="/"
          routerLinkActive="active"
          [routerLinkActiveOptions]="{ exact: true }"
          >Home</a
        >
        <a
          routerLink="/oops"
          routerLinkActive="active"
          [routerLinkActiveOptions]="{ exact: true }"
          >404</a
        >
        <router-outlet></router-outlet>
      </nav>
    </div>
  `
})
export class AppComponent {}
