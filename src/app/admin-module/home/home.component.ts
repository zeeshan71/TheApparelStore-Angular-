import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loggedinadmin:string=null;

  constructor(private adminservice: AdminService, private router:Router) {
    
   }

  ngOnInit(): void {
  
      this.loggedinadmin=localStorage.getItem('adminemail');  
  
  
  }

  signout()
  {
      this.adminservice.signout();
      this.router.navigate(["/login"]);

  }

}
