import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { HomeComponent } from '../home/home.component';
import { AddProductsComponent } from '../add-products/add-products.component';
import { ListofproductsComponent } from '../listofproducts/listofproducts.component';
import { UpdateproductComponent } from '../updateproduct/updateproduct.component';
import { UnauthenticateComponent } from '../unauthenticate/unauthenticate.component';
import { AdminauthenticationGuard } from '../adminauthentication.guard';
import { AllordersComponent } from '../allorders/allorders.component';
import { CustomerloginComponent } from 'src/app/customer-module/customerlogin/customerlogin.component';

const adminroutes: Routes = [

  {path:"login", component:LoginComponent},
  {path:"home", component: HomeComponent, canActivate:[AdminauthenticationGuard]},
  {path:"addProducts", component:AddProductsComponent, canActivate:[AdminauthenticationGuard]},
  {path: "listofproducts", component:ListofproductsComponent, canActivate:[AdminauthenticationGuard]},
  {path: "updateproduct/:id", component: UpdateproductComponent, canActivate:[AdminauthenticationGuard]},
  {path: "unauthenticatedadmin", component: UnauthenticateComponent},
  {path: "allorders", component: AllordersComponent, canActivate:[AdminauthenticationGuard]},
  {path: "customerlogin", component: CustomerloginComponent}
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(adminroutes)
  ],
  exports:[RouterModule]
})
export class AdminRoutingModule { }
