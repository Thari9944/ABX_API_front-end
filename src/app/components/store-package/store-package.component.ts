import { IPackage } from './../../package';
import { PackageService } from 'src/app/services/package.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store-package',
  templateUrl: './store-package.component.html',
  styleUrls: ['./store-package.component.css']
})
export class StorePackageComponent implements OnInit {

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

  storePackage(data: any){
    console.log(data);
    this.packageService.storePackage(data).subscribe(
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

  async searchPackageInStore(){
    if(!this.searchId){
      this.isSearchId = true;
      this.isNotInStore = false;
      this.activeModal = false;
    }else{
      this.searchedPackage = await this.packageService.searchPackageInStore(this.searchId).toPromise();
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
