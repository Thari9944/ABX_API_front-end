import { HostListener } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isScrolled = false;
  toggleactive = false;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener("document:scroll")
  scrollFunction(){
    if(document.body.scrollTop > 0 || document.documentElement.scrollTop >0){
      this.isScrolled = true;
    }
    else{
      this.isScrolled = false;
    }
  }

  activeToggle(){
    if (this.toggleactive == false){
      this.toggleactive = true;
    }else{
      this.toggleactive = false;
    }
  }

}
