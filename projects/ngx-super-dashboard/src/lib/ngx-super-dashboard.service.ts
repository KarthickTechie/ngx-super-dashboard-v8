import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { SelectedFieldValueEmit } from "./ngx-super-dashboard.component";


@Injectable({
  providedIn: "root",
})
export class NgxSuperDashboardService {

  formGroupSetting: any;

 set getFormGroup(formGrp:any){
    this.formGroupSetting = formGrp;
  }
  get getFormGroup(){
    return this.formGroupSetting;
  }

  constructor() {}


}
