import { Component, OnInit } from '@angular/core';
import { PackageService } from 'src/app/services/package.service';
import { IPackage } from 'src/app/package';

@Component({
  selector: 'app-rejister-package',
  templateUrl: './rejister-package.component.html',
  styleUrls: ['./rejister-package.component.css']
})
export class RejisterPackageComponent implements OnInit {

  searchedPackage !: IPackage;
  regNo !: string;
  deleteRegNo !: string;
  isRegNo : boolean = false;
  noPackage : boolean = false;
  activeModal : boolean = false;



  constructor(private packageService: PackageService) { }

  ngOnInit(): void {
  }


  rejisterPackage(data : any){
      this.packageService.rejisterPackage(data).subscribe(
       (result) => console.log(result))
  }

  async getPackageDetails(){
    if(!this.regNo){
      this.isRegNo = true;
      this.noPackage = false;
      this.activeModal = false;
    }else{
      this.searchedPackage = await this.packageService.getPackageDetails(this.regNo).toPromise();
      if(this.searchedPackage == null){
        this.noPackage = true;
        this.isRegNo = false;
        this.activeModal = false;
      }
      else{
        this.activeModal = true;
        this.isRegNo = false;
        this.isRegNo = false;
      }
    }
  }

  editPackage(data: any) {
    this.packageService.editPackage(data, this.regNo).subscribe(
      (result) => console.log(result)
    )
  }

  deletePackage(){
    this.packageService.deletePAckage(this.deleteRegNo).subscribe(
      (result) => console.log(result)
    )
  }

}
