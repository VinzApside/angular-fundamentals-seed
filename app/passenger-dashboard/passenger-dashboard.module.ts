import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpModule } from "@angular/http";
// containers
import { PassengerDashboardComponent } from "./containers/passenger-dashboard/passenger-dashboard.component";
import { PassengerViewerComponent } from "./containers/passenger-viewer/passenger-viewer.component";

//component
import { PassengerCountComponent } from "./components/passenger-count/passenger-count.components";
import { PassengerDetailComponent } from "./components/passenger-detail/passenger-detail.components";

//service
import { PassengerDashboardService } from "./passenger-dashboard.service";

@NgModule({
  declarations: [
    PassengerDashboardComponent,
    PassengerViewerComponent,
    //components generique
    PassengerCountComponent,
    PassengerDetailComponent
  ],
  imports: [CommonModule, HttpModule],
  exports: [PassengerViewerComponent],
  providers: [PassengerDashboardService]
})
export class PassengerDashboardModule {}
