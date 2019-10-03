import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { PassengerDashboardModule } from "./passenger-dashboard/passenger-dashboard.module";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { NotFoundComponent } from "./not-found.component";
import { HomeComponent } from "./home.component";

const routes: Routes = [
  { path: "", component: HomeComponent, pathMatch: "full" },
  { path: "**", component: NotFoundComponent }
];
@NgModule({
  declarations: [AppComponent, HomeComponent, NotFoundComponent],
  imports: [
    //angular module
    BrowserModule,
    CommonModule,
    FormsModule,
    RouterModule.forRoot(routes),
    //custom module
    PassengerDashboardModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
