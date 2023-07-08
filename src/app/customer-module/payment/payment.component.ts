import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  payment:string=null;
  constructor(private customerservice:CustomerService, private router:Router, private activatedroute:ActivatedRoute) {



   }

  ngOnInit(): void {
  
  
  }

  setpaymentmode(paymentmode)
  {
      let orderid= this.activatedroute.snapshot.paramMap.get('orderid');
      const fd= new FormData();
      fd.append('paymentmode', paymentmode);
      this.customerservice.setpaymentmode(orderid, fd).then(response=>{

        if(response!=null)
        {
                this.payment="Payment Mode Set Successfully";
                this.router.navigate(["/orders"]);
        }
        else
        {
            alert("Please Set the Payment Mode again it Again");
        }

      }).catch(error=>{

        console.log(error);
      });
  }
}
