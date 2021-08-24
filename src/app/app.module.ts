import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { QRCodeModule } from 'angularx-qrcode';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchPackageComponent } from './components/search-package/search-package.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { MainPackageComponent } from './components/main-package/main-package.component';
import { MainAboutComponent } from './components/main-about/main-about.component';
import { MainContactComponent } from './components/main-contact/main-contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { RejisterPackageComponent } from './components/rejister-package/rejister-package.component';
import { NavbarCComponent } from './components/navbar-c/navbar-c.component';
import { StorePackageComponent } from './components/store-package/store-package.component';
import { AssignPackageComponent } from './components/assign-package/assign-package.component';
import { MainEmployeeComponent } from './components/main-employee/main-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchPackageComponent,
    MainPageComponent,
    MainPackageComponent,
    MainAboutComponent,
    MainContactComponent,
    FooterComponent,
    RejisterPackageComponent,
    NavbarCComponent,
    StorePackageComponent,
    AssignPackageComponent,
    MainEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    QRCodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
