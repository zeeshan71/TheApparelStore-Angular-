import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-customerlogin',
  templateUrl: './customerlogin.component.html',
  styleUrls: ['./customerlogin.component.css']
})
export class CustomerloginComponent implements OnInit {

  message:string=null;

  constructor(private customerservice: CustomerService, private router:Router) {


   }

  ngOnInit(): void {
  }

  validate(email:string, password:string)
  {

    this.customerservice.authenticate(email,password).then(response=>{

          if(response.payload!=null)
          {
            //this.message="Login Successfull";
            localStorage.setItem('email', email);
            localStorage.setItem('password', password);
            this.router.navigate(["/customerhome"]);
           
          }
          else{
            this.message="Invalid Email or Password";
          }

    }).catch(error=>
    {
      console.log(error);
    });



  }



}
