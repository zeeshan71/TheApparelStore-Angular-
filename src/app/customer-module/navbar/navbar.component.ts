import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faCartPlus, faIdCard, faListAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  cart= faCartPlus;
  profile= faIdCard;
  orders= faListAlt;
  signouticon= faSignOutAlt;

  constructor(private customerservice: CustomerService,private router:Router) { 

    

  }

  ngOnInit(): void {
  }


  gotosearchproduct(search)
  {
    this.router.navigate(["/searchproduct", search]);
  }
  signout()
  {
    this.customerservice.signout();
    this.router.navigate(["/customerlogin"]);
  }


}
