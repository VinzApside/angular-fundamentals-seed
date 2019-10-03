import { Component, Input, Output } from "@angular/core";
import { Passenger } from "../../models/passenger-interface";
import { Baggage } from "../../models/baggage.interface";
import { EventEmitter } from "@angular/common/src/facade/async";

@Component({
  selector: "passenger-form",
  styleUrls: ["passenger-form.components.scss"],
  template: `
    <form
      (ngSubmit)="handleSubmit(form.value, form.valid)"
      #form="ngForm"
      novalidate
    >
      <div>
        Passenger name:
        <input
          required
          type="text"
          name="name"
          #fullname="ngModel"
          [ngModel]="detail?.fullname"
        />
        <div *ngIf="fullname.errors?.required && fullname.dirty" class="error">
          Passenger name is required
        </div>
      </div>
      <div>
        Passenger ID:
        <input
          required
          #id="ngModel"
          type="number"
          name="id"
          [ngModel]="detail?.id"
        />
        <div *ngIf="id.errors?.required && id.dirty" class="error">
          Passenger id is required
        </div>
      </div>
      <div>
        <label>
          <input
            type="radio"
            [value]="true"
            name="checkedIn"
            [ngModel]="detail?.checkedIn"
            (ngModelChange)="toggleCheckIn($event)"
          />Yes</label
        >
        <label>
          <input
            type="radio"
            [value]="false"
            name="checkedIn"
            [ngModel]="detail?.checkedIn"
            (ngModelChange)="toggleCheckIn($event)"
          />No</label
        >
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="checkedIn"
            [ngModel]="detail?.checkedIn"
            (ngModelChange)="toggleCheckIn($event)"
          />Checkbox</label
        >
      </div>

      <div *ngIf="form.value.checkedIn">
        Check in date:
        <input
          type="number"
          name="checkInDate"
          [ngModel]="detail?.checkInDate"
        />
      </div>

      <div>
        Luggage:
        <select name="baggage" [ngModel]="detail?.baggage">
          <option
            *ngFor="let item of baggage"
            [value]="item.key"
            [selected]="item.key == detail?.baggage"
          >
            {{ item.value }}
          </option>
        </select>
      </div>
      <button type="submit" [disabled]="form.invalid">Update passenger</button>
    </form>
  `
})
export class PassengerFormComponent {
  @Input()
  detail: Passenger;

  @Output()
  update: EventEmitter<Passenger> = new EventEmitter();

  baggage: Baggage[] = [
    { key: "none", value: "no baggage" },
    { key: "hand-only", value: "hand baggage" },
    { key: "hand-hold", value: "hand and hold baggage" }
  ];
  toggleCheckIn(checkedIn: boolean) {
    if (checkedIn) {
      this.detail.checkInDate = Date.now();
      this.detail.checkedIn = checkedIn;
    }
  }
  handleSubmit(passenger: Passenger, isValid: boolean) {
    if (isValid) {
      this.update.emit(passenger);
    }
  }
}
