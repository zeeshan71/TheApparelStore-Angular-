import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  customer:any=[];
  constructor(private customerservice: CustomerService) { }

  ngOnInit(): void {
  
    this.customerservice.getcustomerprofile().then(response=>{

        this.customer= response;
        console.log(response);

    }).catch(error=>{

        console.log(error);

    });
    

  
    
  
  }



}
