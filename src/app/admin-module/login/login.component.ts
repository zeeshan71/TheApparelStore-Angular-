import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loggedinadmin:any= null;  
  message:string=null;

  constructor(private adminservice:AdminService, private router:Router) { 


  }

  ngOnInit(): void {

    
}

  validate(email:string, password:string)
    {
            this.adminservice.authenticate(email,password).
            then(response=>
            {
                if(response.payload!=null)
                {
                    //this.message="Login Successfull"
                    this.loggedinadmin=localStorage.setItem('adminemail',email);
                    this.router.navigate(["/home"]);
                }
                else
                {
                    this.message="Invalid Login or Password";
                }
            })
            .catch(error=>{

                console.log(error);
                return null;
            })


    }


    checkboxes: any[] = [
      { name: 'partner1', value: 'option 1', checked: false },
      { name: 'partner2', value: 'cb2', checked: false },
      { name: 'partner3', value: 'cb3', checked: false },
      { name: 'partner4', value: 'cb4', checked: false },
      { name: 'partner5', value: 'cb5', checked: false },
    ]
    selectall:any      
    selectAll() {
      for (var i = 0; i < this.checkboxes.length; i++) {
        this.checkboxes[i].selected = this.selectall;
      }
    }
    checkIfAllSelected() {
      this.selectall = this.selectall.every(function(item:any) {
          return item.selected == true;
        })
    }
  

}

  


