import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { PassengerDashBoardModule } from "./passenger-dashboard/passenger-dashboard.module";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [
    //angular module
    BrowserModule,
    CommonModule,
    FormsModule,
    //custom module
    PassengerDashBoardModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
