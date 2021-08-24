import { Component, OnInit } from '@angular/core';
import { IPackage } from 'src/app/package';
import { PackageService } from 'src/app/services/package.service';

@Component({
  selector: 'app-search-package',
  templateUrl: './search-package.component.html',
  styleUrls: ['./search-package.component.css']
})
export class SearchPackageComponent implements OnInit {


  searchedPackage !: IPackage;
  regNo !: string;
  isRegNo : boolean = false;
  noPackage : boolean = false;
  activeModal : boolean = false;

  constructor(private packageService: PackageService) { }

  ngOnInit(): void {
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
        console.log("noPackage");
      }
      else{
        this.activeModal = true;
        this.isRegNo = false;
        this.isRegNo = false;
        console.log("Package", this.searchedPackage);

      }
    }
  }

}
