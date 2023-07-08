import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit {

  product:any=[];
  constructor(private adminservice: AdminService, private activatedroute:ActivatedRoute, private router:Router) { 


  }

  ngOnInit(): void {
  
      let id= this.activatedroute.snapshot.paramMap.get("id");
      this.adminservice.getproductbyid(id).then(response=>{

        this.product= response;
        console.log(response);

      }).catch(error=>{
            console.log(error);

      });
      

  }

  updateProduct(name:string, price:string, description:string, stock:string)
  {

        let id= this.activatedroute.snapshot.paramMap.get("id");
        const fd= new FormData();
  
        fd.append('name',name);
        fd.append('price',price);
        fd.append('description',description);
        fd.append('stock', stock);

        this.adminservice.updateProduct(fd,id).then(response=>{

          console.log(response);
          if(response!=null)
          {
            this.router.navigate(["/listofproducts"]);
          }

        }).catch(error=>{

              console.log(error);
        });       

  }
  

}
