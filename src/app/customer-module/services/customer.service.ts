import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  root_url="http://localhost:8080/TheApparelStore";
  email:string= null;


  constructor(private http:HttpClient) {



   }

   authenticate(email:string, password:string)
    {
        let url=`${this.root_url}/authenticateCustomer/${email}/${password}`;
        return this.http.get(url).toPromise();
    }

    getallProducts()
   {
        return this.http.get(`${this.root_url}/allProducts`).toPromise();  
  }

  addtocart(id)
  {
    this.email=localStorage.getItem('email');
    return this.http.post(`${this.root_url}/products/addToCart/${id}/${this.email}`, null).toPromise();

  }

  getcart()
  {
    this.email= localStorage.getItem('email');
    return this.http.get(`${this.root_url}/mycart/${this.email}`).toPromise();
    
  }

  removecartproduct(id)
  {
    console.log(id);
    return this.http.delete(`${this.root_url}/deletecartProduct/${id}`).toPromise();
  }

  checkout()
  {
    this.email= localStorage.getItem('email');
    return this.http.post(`${this.root_url}/orders/newOrder/${this.email}`,null).toPromise();
  }

  getorderlist()
  {
      this.email=localStorage.getItem('email')
      return this.http.get(`${this.root_url}/myOrders/${this.email}`).toPromise();

  }

  getTotalPrice()
  {
    this.email=localStorage.getItem('email');
    return this.http.get(`${this.root_url}/mycart/total/${this.email}`).toPromise();

  }

  deleteorder(orderid)
  {
      return this.http.delete(`${this.root_url}/myOrder/Delete/${orderid}`).toPromise();

  }
  signout()
  {
    return localStorage.removeItem('email'), localStorage.removeItem('password');
    
  }

  addcustomer(fd)
  {
    return this.http.post(`${this.root_url}/addCustomer`,fd).toPromise();
  }

  getcustomerprofile()
  {
    this.email=localStorage.getItem('email');
    return this.http.get(`${this.root_url}/customer/profile/${this.email}`).toPromise();
  }


  changePassword(fd)
  {
    this.email=localStorage.getItem('email');
    return this.http.put(`${this.root_url}/profile/changePassword/${this.email}`, fd).toPromise();
  }

  updateaddress(fd)
  {
    this.email= localStorage.getItem('email');
    return this.http.put(`${this.root_url}/profile/changeAddress/${this.email}`, fd).toPromise();
  }

  getproductbyid(id)
  {
    return this.http.get(`${this.root_url}/product/${id}`).toPromise();
  }

  setpaymentmode(orderid, fd)
  {
    return this.http.put(`${this.root_url}/orders/paymentmode/${orderid}`, fd).toPromise();
  }

  searchproduct(search)
  {
    return this.http.get(`${this.root_url}/searchproducts/${search}`).toPromise();
  }

}
