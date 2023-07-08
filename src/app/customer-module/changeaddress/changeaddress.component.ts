import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-changeaddress',
  templateUrl: './changeaddress.component.html',
  styleUrls: ['./changeaddress.component.css']
})
export class ChangeaddressComponent implements OnInit {

  message:string=null;
  constructor(private customerservice: CustomerService, private router:Router) { 


  }

  ngOnInit(): void {
  }

  changeaddress(address)
  {
    const fd= new FormData();
    fd.append('address', address);
    this.customerservice.updateaddress(fd).then(response=>{
      
      console.log(response);
      if(response.payload!=null)
      {
        this.router.navigate(["/profile"]);
      }
      else{
        this.message="Please Change Address Again";
      }

    }).catch(error=>{

        console.log(error);

    })
  }

}
