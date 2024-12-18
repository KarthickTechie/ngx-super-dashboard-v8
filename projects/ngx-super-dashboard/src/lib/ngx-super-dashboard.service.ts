import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class NgxSuperDashboardService {

  _formGroupSetting: any;

  set getFormGroup(formGrp:any){
    this._formGroupSetting = formGrp;
  }
  get getFormGroup(){
    return this._formGroupSetting;
  }

  constructor() {}

}
