import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from '../admin-module/admin/admin.component';
import { LoginComponent } from '../admin-module/login/login.component';
import { CustomerComponent } from '../customer-module/customer/customer.component';
import { CustomerloginComponent } from '../customer-module/customerlogin/customerlogin.component';
import { MainhomeComponent } from '../root-module/mainhome/mainhome.component';
import { SampleComponent } from '../sample-module/sample/sample.component';

const routes: Routes = [
  {path: "", component: MainhomeComponent},
  {path:"admin",component: AdminComponent},
  {path:"customer", component: CustomerComponent},
  {path:"login", component:LoginComponent},
  {path: "customerlogin", component: CustomerloginComponent},
  {path:"sample", component:SampleComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  


}
