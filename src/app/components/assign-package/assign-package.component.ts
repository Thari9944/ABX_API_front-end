import { Component, OnInit } from '@angular/core';
import { PackageService } from 'src/app/services/package.service';

@Component({
  selector: 'app-assign-package',
  templateUrl: './assign-package.component.html',
  styleUrls: ['./assign-package.component.css']
})
export class AssignPackageComponent implements OnInit {

  searchId !: string;
  deleteId !: string;
  searchedPackage !: any;
  isSearchId: boolean = false;
  isNotInStore: boolean = false;
  activeModal: boolean = false;
  isNotEditable :boolean = true;

  constructor(private packageService: PackageService) { }

  ngOnInit(): void {
    window.scrollTo(0, 0)
  }

  editable(){
    this.isNotEditable = false;
  }

  assignPackage(data: any){
    console.log(data);
    this.packageService.assignPackage(data).subscribe(
      (result) => console.log(result)
    )
  }

  editPackageInStore(data: any){
    this.packageService.editPackageInStore(data, this.searchId).subscribe(
      (result)=> console.log(result)
    )
  }

  deletePackageInStore(){

  }

  async searchAssignedPackage(){
    if(!this.searchId){
      this.isSearchId = true;
      this.isNotInStore = false;
      this.activeModal = false;
    }else{
      this.searchedPackage = await this.packageService.getAssignedPackage(this.searchId).toPromise();
      if(this.searchedPackage == null){
        this.isNotInStore = true;
        this.isSearchId = false;
        this.activeModal = false;
      }
      else{
        this.activeModal = true;
        this.isSearchId = false;
        this.isNotInStore = false;
      }
    }

  }
}
