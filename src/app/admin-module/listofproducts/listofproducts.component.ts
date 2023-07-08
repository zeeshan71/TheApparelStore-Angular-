import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-listofproducts',
  templateUrl: './listofproducts.component.html',
  styleUrls: ['./listofproducts.component.css']
})
export class ListofproductsComponent implements OnInit {


  //products: Array<any>;
  products:any
  message:string=null;
  constructor(private adminservice:AdminService, private router:Router) {


   }
   ngOnInit(){
    
      //this.adminservice.getallProducts().subscribe(data=>{

        //this.products=data;
      //});

      this.adminservice.getallProducts().then(response=>{

        this.products=response;
        console.log(response);
  
       }).catch(error=>{
  
        console.log(error);
       });
         
  
   }

   deleteproduct(id)
   {
     this.adminservice.deleteproduct(id).then(response=>{
       
        if(response!=null)
        {
        this.message="Product Deleted Successfully";
        this.ngOnInit();      
      }
        else{
          this.message="Product was not Deleted";
        }
     }).catch(error=>{

      console.log(error);

     })
   }
   
   gotoupdatecomponent(id)
   {
     this.router.navigate(["/updateproduct",id]);
   }
   


}
