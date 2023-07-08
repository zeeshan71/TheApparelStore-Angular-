import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {
    message:string=null
    product:any;
  constructor(private customerservice: CustomerService, private activatedroute: ActivatedRoute, private router: Router) { 

    
  }

  ngOnInit(): void {

    let id= this.activatedroute.snapshot.paramMap.get("id");
    this.customerservice.getproductbyid(id).then(response=>{

        this.product=response;
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
            alert("Product is been added to Cart!!!"); 
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
