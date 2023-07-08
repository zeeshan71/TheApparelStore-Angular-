import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  message:string=null;
  constructor(private customerservice: CustomerService, private router:Router) { 



  }

  ngOnInit(): void {
  }

  changePassword(oldPassword, newPassword)
  {
      if(localStorage.getItem('password')!=oldPassword)
      {
          this.message="Invalid Old Password";
      }
      else
      {
          const fd= new FormData()
          fd.append('password', newPassword);
          
          this.customerservice.changePassword(fd).then(response=>{

              if(response.payload!=null)
            {     
                  localStorage.removeItem('password');
                  localStorage.setItem('password', newPassword);
                  this.router.navigate(["/profile"]);
            }
            else{

                this.message="Please Change Password Again";
            }

          }).catch(error=>
          {
              console.log(error);
          });
          
        
      }

  }


}
