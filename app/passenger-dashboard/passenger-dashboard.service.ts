import { Passenger } from "./models/passenger-interface";
import {
  Http,
  Response,
  Headers,
  Request,
  RequestOptions
} from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import { Injectable } from "@angular/core";

const PASSENGER_API: string = "/api/passengers";

@Injectable()
export class PassengerDashboardService {
  constructor(private http: Http) {}
  getPassengers(): Observable<Passenger[]> {
    return this.http
      .get(PASSENGER_API)
      .map((response: Response) => response.json());
  }

  updatePassengers(passenger: Passenger): Observable<Passenger> {
    let headers = new Headers({
      "content-type": "application/json"
    });
    let options = new RequestOptions({
      headers: headers
    });
    return this.http
      .put(`${PASSENGER_API}/${passenger.id}`, passenger, options)
      .map((response: Response) => response.json());
  }
  removePassengers(passenger: Passenger): Observable<Passenger> {
    return this.http
      .delete(`${PASSENGER_API}/${passenger.id}`)
      .map((response: Response) => response.json());
  }
}
