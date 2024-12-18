import { Injectable } from "@angular/core";
import { SelectedFieldValueEmit } from "./ngx-super-dashboard.component";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class NgxSuperDashboardService {
  public _dataBindToField = new Subject<SelectedFieldValueEmit[]>();

  constructor() {}

  setdataBindToField(val: SelectedFieldValueEmit[]) {
    this._dataBindToField.next(val);
  }

}
