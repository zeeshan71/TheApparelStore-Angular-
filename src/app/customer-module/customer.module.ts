import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer/customer.component';
import { AppRoutingModule } from '../root-routing-module/app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CustomerService } from './services/customer.service';
import { CustomerRoutingModule } from './customer-routing/customer-routing.module';
import { AdminRoutingModule } from '../admin-module/admin-routing/admin-routing.module';
import { CustomerloginComponent } from './customerlogin/customerlogin.component';
import { CustomerhomeComponent } from './customerhome/customerhome.component';
import { CartComponent } from './cart/cart.component';
import { OrderlistComponent } from './orderlist/orderlist.component';
import { RegistrationComponent } from './registration/registration.component';
import { ProfileComponent } from './profile/profile.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ChangeaddressComponent } from './changeaddress/changeaddress.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { PaymentComponent } from './payment/payment.component';
import { SearchproductsComponent } from './searchproducts/searchproducts.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComponent } from '../root-module/app.component';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [CustomerComponent, CustomerloginComponent, CustomerhomeComponent, CartComponent, OrderlistComponent, RegistrationComponent, ProfileComponent, ChangePasswordComponent, ChangeaddressComponent, ProductDescriptionComponent, PaymentComponent, SearchproductsComponent, NavbarComponent, ],
  imports: [
    CommonModule, CustomerRoutingModule, AppRoutingModule, FormsModule, HttpClientModule, AdminRoutingModule, FontAwesomeModule
  ],
  exports:[CustomerComponent],
  providers:[CustomerService],
  bootstrap:[AppComponent]
})
export class CustomerModule { }
