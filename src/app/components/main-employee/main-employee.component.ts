import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { IEmployee } from 'src/app/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-main-employee',
  templateUrl: './main-employee.component.html',
  styleUrls: ['./main-employee.component.css']
})
export class MainEmployeeComponent implements OnInit {

  employees!:  IEmployee[];
  deleteStatus : any = 0;


  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  async getEmployees(){
    console.log("Called");
    this.employees = await this.employeeService.getAllEmployees().toPromise();
    console.log(this.employees);

  }

  rejisterEmployee(data: any){
    console.log(data);
    this.employeeService.rejisterEmployee(data).subscribe(
      (result)=> console.log(result)
    )
    window.location.reload();
  }

  deleteEmployee(empId: string){
    this.employeeService.deleteEmployee(empId).subscribe(
      (result)=> this.deleteStatus = result
    )
    window.location.reload();
  }

}
