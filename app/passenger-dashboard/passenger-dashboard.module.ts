import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpModule } from "@angular/http";
// containers
import { PassengerDashboardComponent } from "./containers/passenger-dashboard/passenger-dashboard.component";
import { PassengerViewerComponent } from "./containers/passenger-viewer/passenger-viewer.component";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

//component
import { PassengerCountComponent } from "./components/passenger-count/passenger-count.components";
import { PassengerDetailComponent } from "./components/passenger-detail/passenger-detail.components";

//service
import { PassengerDashboardService } from "./passenger-dashboard.service";
import { PassengerFormComponent } from "./components/passenger-form/passenger-form.components";

const routes: Routes = [
  {
    path: "passengers",
    children: [
      { path: "", component: PassengerDashboardComponent },
      { path: ":id", component: PassengerViewerComponent }
    ]
  }
];

@NgModule({
  declarations: [
    PassengerDashboardComponent,
    PassengerViewerComponent,
    //components generique
    PassengerCountComponent,
    PassengerDetailComponent,
    PassengerFormComponent
  ],
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [PassengerDashboardService]
})
export class PassengerDashboardModule {}
