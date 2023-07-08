import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-navbaradmin',
  templateUrl: './navbaradmin.component.html',
  styleUrls: ['./navbaradmin.component.css']
})
export class NavbaradminComponent implements OnInit {

  signouticon= faSignOutAlt;
  constructor(private adminservice: AdminService, private router:Router) { }

  ngOnInit(): void {
  
    
  }
  signout()
  {
      this.adminservice.signout();
      this.router.navigate(["/login"]);

  }

}
