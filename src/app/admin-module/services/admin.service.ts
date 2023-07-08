import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  loggedinadmin:string=null;
  root_url="http://localhost:8080/TheApparelStore";
  constructor(private http: HttpClient) { 


  }
  authenticate(email:string, password:string)
    {
        let url=`${this.root_url}/authenticateAdmin/${email}/${password}`;
        return this.http.get(url).toPromise();
    }

    
   addProducts(fd)
   {
      return this.http.post(`${this.root_url}/addProducts`,fd).toPromise();
   } 
   
   //getallProducts():Observable<any>
   //{
     //   return this.http.get(`${this.root_url}/allProducts`);  
  //}
  
  getallProducts()
   {
        return this.http.get(`${this.root_url}/allProducts`).toPromise();  
  }

  deleteproduct(id)
  {
    return this.http.delete(`${this.root_url}/removeProduct/${id}`).toPromise();
  }

  getproductbyid(id)
  {
    return this.http.get(`${this.root_url}/product/${id}`).toPromise();
  }

  updateProduct(fd, id)
  {
      return this.http.put(`${this.root_url}/product/updatebyquery/${id}`,fd).toPromise();

  }

  signout()
  {
    return localStorage.removeItem('adminemail');

  }
  getloggedinadmin()
  {
    return this.loggedinadmin;
  }

  getallorders()
  {
    return this.http.get(`${this.root_url}/orders/allorders`).toPromise();
  }


}
