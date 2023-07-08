import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-customerhome',
  templateUrl: './customerhome.component.html',
  styleUrls: ['./customerhome.component.css']
})
export class CustomerhomeComponent implements OnInit {

  cart= faCartPlus;
  products: any;
  email:string=null;
  message:string=null;
  constructor(private customerservice: CustomerService, private router:Router) { 

    

  }
  

  ngOnInit(): void {
      
      this.email= localStorage.getItem('email');
      console.log(this.email);

      this.customerservice.getallProducts().then(response=>{

        this.products=response;
        console.log(response);
  
       }).catch(error=>{
  
        console.log(error);
       });    

       
  
  }
  

  addtoCart(id)
  {

        this.customerservice.addtocart(id).then(response=>{
          if(response!=null)
          {
          this.message="Product Added To Cart";
          console.log(response);
          }
          else{
            this.message="Product was not added to cart";
            console.log(response);
          }

        }).catch(error=>{

            console.log(error);

        });

  }

  signout()
  {
    this.customerservice.signout();
    this.router.navigate(["/customerlogin"]);
  }

  gotoproductdescription(id)
  {
        this.router.navigate(["/productdescription",id]);
  }

  gotosearchproduct(search)
  {
    this.router.navigate(["/searchproduct", search]);
  }
  
  
}
