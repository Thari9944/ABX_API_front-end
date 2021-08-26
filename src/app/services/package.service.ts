import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPackage } from '../package';

@Injectable({
  providedIn: 'root'
})
export class PackageService {

  constructor(private http: HttpClient) { }

  //Register Package Componenet

  getPackageDetails(regNo: string): Observable<IPackage>{
    return this.http.get<IPackage>("http://localhost:8080/webapi/package/find?regNo="+regNo);
  }

  rejisterPackage(data:any){
    return this.http.post("http://localhost:8080/webapi/package/registerPackage",data);
  }

  editPackage(data:any, regNo: string){
    const url = "http://localhost:8080/webapi/package/update?regNo="+ regNo;
    return this.http.post(url, data);
  }

  deletePAckage(deleteNo: string){
    return this.http.get("http://localhost:8080/webapi/package/delete?regNo=" + deleteNo);
  }

  //Store Package Components
  storePackage(sPackage: any){
    return this.http.post("http://localhost:8080/webapi/store/storePackage", sPackage);
  }

  editPackageInStore(ePackage: any){
    return this.http.post("http://localhost:8080/webapi/store/update", ePackage);
  }

  deletePackageInStore(id : string){
    return this.http.get("http://localhost:8080/webapi/store/delete?regId=" + id);
  }

  searchPackageInStore(id : string){
    return this.http.get("http://localhost:8080/webapi/store/find?regId="+ id);
  }

  //Assign package to employee component
  getAssignedPackage(id: string){
    return this.http.get("http://localhost:8080/webapi/assignment/find?regId="+id);
  }

  assignPackage(data: any){
    return this.http.post("http://localhost:8080/webapi/assignment/save",data);
  }

  deleteAssignedPackage(id : string){
    return this.http.get("http://localhost:8080/webapi/assignment/Delete?regId="+id);
  }

  editAssignedPackage(data: any){
    return this.http.post("http://localhost:8080/webapi/assignment/edit", data);
  }
}
