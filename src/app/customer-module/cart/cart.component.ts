import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  totalPrice:any;
  cartitems:any;
  message:string=null;

  constructor(private customerservice: CustomerService, private router:Router) { }

  ngOnInit(): void {
 
        this.customerservice.getcart().then(response=>{

            this.cartitems= response;
            console.log(response);

        }).catch(error=>
          {
              console.log(error);

          });
          

          this.customerservice.getTotalPrice().then(response=>{

            this.totalPrice=response;
            console.log(response);
        }).catch(error=>{

            console.log(error);
        })

 
  }

  removecartproduct(id)
  {
    this.customerservice.removecartproduct(id).then(response=>{
      console.log(id);
      if(response!=null)
      {

        console.log(response);
        this.message="Product Removed";
        this.ngOnInit();

      }
      else{
        console.log(response);
        this.message="Product Was not Removed";
        this.ngOnInit();
      }

    }).catch(error=>{

        console.log(error);
    });

  }
  
  checkout()
  {
      this.customerservice.checkout().then(response=>{

          if(response!=null)
          {
            console.log(response);
            //this.message="Order Placed Successfully";
            alert("Order Placed");
              this.router.navigate(["/orders"]);
          }
          else{
            this.message="Order Was Not Placed";
            alert("Order Was Not Placed");
            
          }

      }).catch(error=>{

          console.log(error);

      });

  }


}
