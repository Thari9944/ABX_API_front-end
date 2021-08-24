import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { RejisterPackageComponent } from './components/rejister-package/rejister-package.component';
import { StorePackageComponent } from './components/store-package/store-package.component';
import { AssignPackageComponent } from './components/assign-package/assign-package.component';

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'main', component : MainPageComponent},
  {path: 'rejister-package', component: RejisterPackageComponent},
  {path: 'store-package', component: StorePackageComponent},
  {path: 'assign-package', component:AssignPackageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
