import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'protractor';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-searchproducts',
  templateUrl: './searchproducts.component.html',
  styleUrls: ['./searchproducts.component.css']
})
export class SearchproductsComponent implements OnInit {

  products:any;
  message:string=null;
  constructor(private customerservice: CustomerService, private activatedroute: ActivatedRoute, private router:Router) {



   }

  ngOnInit(): void {
  
        let search= this.activatedroute.snapshot.paramMap.get('search');
        this.customerservice.searchproduct(search).then(response=>{

          console.log(response);
          this.products= response;


        }).catch(error=>{

            console.log(error);

        });
  
  
  }

  gotoproductdescription(id)
  {
        this.router.navigate(["/productdescription",id]);
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


}
