import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { AdminRoutingModule } from './admin-routing/admin-routing.module';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from '../root-routing-module/app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { ListofproductsComponent } from './listofproducts/listofproducts.component';
import { ProviderAst } from '@angular/compiler';
import { AdminService } from './services/admin.service';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { UnauthenticateComponent } from './unauthenticate/unauthenticate.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AllordersComponent } from './allorders/allorders.component';
import { NavbaradminComponent } from './navbaradmin/navbaradmin.component';
import { RegisteruserComponent } from './registeruser/registeruser.component';
import { TestComponent } from './test/test.component';



@NgModule({
  declarations: [AdminComponent, LoginComponent, HomeComponent, AddProductsComponent, ListofproductsComponent, UpdateproductComponent, UnauthenticateComponent, AllordersComponent, NavbaradminComponent, RegisteruserComponent, TestComponent],
  imports: [
    CommonModule, AdminRoutingModule, AppRoutingModule, FormsModule, HttpClientModule, FontAwesomeModule
  ],
  exports:[AdminComponent, LoginComponent],
  providers:[AdminService]
})
export class AdminModule { 




}
