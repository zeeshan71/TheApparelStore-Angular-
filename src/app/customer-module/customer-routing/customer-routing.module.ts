import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CustomerloginComponent } from '../customerlogin/customerlogin.component';
import { CustomerhomeComponent } from '../customerhome/customerhome.component';
import { CartComponent } from '../cart/cart.component';
import { OrderlistComponent } from '../orderlist/orderlist.component';
import { CustomerauthenticationGuard } from '../customerauthentication.guard';
import { RegistrationComponent } from '../registration/registration.component';
import { ProfileComponent } from '../profile/profile.component';
import { ChangePasswordComponent } from '../change-password/change-password.component';
import { ChangeaddressComponent } from '../changeaddress/changeaddress.component';
import { ProductDescriptionComponent } from '../product-description/product-description.component';
import { PaymentComponent } from '../payment/payment.component';
import { SearchproductsComponent } from '../searchproducts/searchproducts.component';
import { LoginComponent } from 'src/app/admin-module/login/login.component';

const customerroutes:Routes=[

  {path:"customerlogin", component: CustomerloginComponent},
  {path:"customerhome", component: CustomerhomeComponent, canActivate:[CustomerauthenticationGuard]},
  {path: "cart", component: CartComponent, canActivate:[CustomerauthenticationGuard]},
  {path: "orders", component: OrderlistComponent, canActivate:[CustomerauthenticationGuard]},
  {path: "customeregistration", component: RegistrationComponent},
  {path: "profile", component: ProfileComponent, canActivate:[CustomerauthenticationGuard]},
  {path: "changepassword", component: ChangePasswordComponent, canActivate:[CustomerauthenticationGuard]},
  {path: "changeaddress", component: ChangeaddressComponent, canActivate:[CustomerauthenticationGuard]},
  {path: "productdescription/:id", component: ProductDescriptionComponent, canActivate:[CustomerauthenticationGuard]},
  {path: "payment/:orderid", component: PaymentComponent, canActivate:[CustomerauthenticationGuard]},
  {path: "searchproduct/:search", component: SearchproductsComponent, canActivate:[CustomerauthenticationGuard]},
  {path: "login", component: LoginComponent}


]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(customerroutes)
  ],
  exports:[RouterModule]
})
export class CustomerRoutingModule { }
