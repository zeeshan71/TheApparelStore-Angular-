import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'TheApparelStore';
  showboth;
  showadmin;
  showcustomer;
  faCoffee = faCoffee;
  constructor(private router:Router){

  }

  ngOnInit(): void{
      
      
      
  }

  admin()
  {
    this.router.navigate(["/login"]);
    if(localStorage.getItem('adminemail')==null)
    {
        return this.showadmin=true;  
    }
    else{
      return this.showadmin=false;
    }
  }

  customer()
  {
    this.router.navigate(["/customerlogin"]);
    if(localStorage.getItem('email')==null)
    {
      return this.showcustomer=true;
    }
    else{
      return this.showcustomer=false;
    }

  }

  
  
}