import { Component, OnInit } from '@angular/core';
import { error } from 'protractor';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-allorders',
  templateUrl: './allorders.component.html',
  styleUrls: ['./allorders.component.css']
})
export class AllordersComponent implements OnInit {

  orders:any;
  constructor(private adminservice:AdminService) { 


  }

  ngOnInit(): void {
 
      this.adminservice.getallorders().then(response=>{

        this.orders=response;
        console.log(response);
      }).catch(error=>{

        console.log(error);

      });
 
  }

}
