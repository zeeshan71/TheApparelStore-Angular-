import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  customer:any;
  message:string=null;

  constructor(private customerservice: CustomerService, private router: Router) { 




  }

  ngOnInit(): void {
  }

  addcustomer(email, password, full_name,shipping_address, country, phone )
  {
        const fd= new FormData();

        fd.append('email', email);
        fd.append('password', password);
        fd.append('full_name', full_name);
        fd.append('shipping_address', shipping_address);
        fd.append('country', country);
        fd.append('phone', phone);
        

        this.customerservice.addcustomer(fd).then(response=>{
        console.log(response);
        if(response!=null)
        {
          this.router.navigate(["/customerlogin"]);
        }
        else{
            this.message="Please Register Again!";

        }

    }).catch(error=>{

        console.log(error);

    });


  }



}
