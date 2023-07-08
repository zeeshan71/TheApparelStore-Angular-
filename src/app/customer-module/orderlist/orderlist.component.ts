import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.css']
})
export class OrderlistComponent implements OnInit {

  orders:any;
  totalPrice:object=null;
  payment:string=null;
  constructor(private customerservice:CustomerService, private router:Router) { }

  ngOnInit(): void {
  
          this.customerservice.getorderlist().then(response=>{

              this.orders=response;
              console.log(response);

          }).catch(error=>{

              console.log(error);

          });

          this.customerservice.getTotalPrice().then(response=>{

              this.totalPrice=response;
              console.log(response);
          }).catch(error=>{

              console.log(error);
          })

  
  }

  deleteorder(orderid)
  {
      this.customerservice.deleteorder(orderid).then(response=>{
          console.log(response);
          if(response!=null)
          {
              alert("Order Cancelled");
              this.router.navigate(["/cart"]);
          }
          else{
              alert("Order Was not Cancelled");
              this.ngOnInit();
          }

      }).catch(error=>{

          console.log(error);


      });
  }

  gotopaymentmode(orderid)
  {

        this.router.navigate(["/payment", orderid]);

  }
  

}
