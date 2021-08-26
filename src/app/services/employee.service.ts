import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from '../employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  getAllEmployees() : Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>("http://localhost:8080/webapi/emp/getAll");
  }

  rejisterEmployee(data: any){
    return this.http.post("http://localhost:8080/webapi/emp/save",data);
  }

  deleteEmployee(empId : string){
    return this.http.get("http://localhost:8080/webapi/emp/delete?empId=" +empId);
  }
}
