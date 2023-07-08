import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from '../root-routing-module/app-routing.module';
import { AdminModule } from '../admin-module/admin.module';
import { AdminRoutingModule } from '../admin-module/admin-routing/admin-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CustomerModule } from '../customer-module/customer.module';
import { CustomerRoutingModule } from '../customer-module/customer-routing/customer-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MainhomeComponent } from './mainhome/mainhome.component';

@NgModule({
  declarations: [
    AppComponent,
    MainhomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, AdminModule, AdminRoutingModule, FormsModule, HttpClientModule, CustomerModule, CustomerRoutingModule, FontAwesomeModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  



 }
