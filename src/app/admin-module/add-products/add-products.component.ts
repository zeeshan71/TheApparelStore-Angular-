import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {

  selectedfile1:File=null;
  selectedfile2:File=null;
  selectedfile3:File=null;
  message:string=null;
  constructor(private adminservice:AdminService, router:Router) { 

    
  }

  ngOnInit(): void {
  }
  onFileSelect1(event){
      this.selectedfile1=<File>event.target.files[0];
    }

  onFileSelect2(event){
    this.selectedfile2=<File>event.target.files[0];
  }
onFileSelect3(event){
  this.selectedfile3=<File>event.target.files[0];
}


  addProducts(name:string, price:string, categories:string, description:string, stock:string, image1:File, image2:File, image3:File)
  {
    const fd= new FormData();
    fd.append('name', name);
    fd.append('price', price);
    fd.append('categories', categories);
    fd.append('description', description);
    fd.append('stock', stock);
    fd.append('image1',this.selectedfile1);
    fd.append('image2', this.selectedfile2);
    fd.append('image3', this.selectedfile3);

    this.adminservice.addProducts(fd).then(response=>{
      if(response!=null){
        alert("Product Added!!");
        this.message="Product Added Successfully";
        

    }
    
      else{
        alert("Product Was not Added");
        this.message="Product Was not Added";      
      }

    }).catch(error=>{
      console.log(error);
    })

  }

}
