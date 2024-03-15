import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from '../UserModal/userModal';

@Injectable({
  providedIn: 'root'
})
export class ProdServiceService {
  productUrl='http://localhost:3000/newProducts'
  catagoryURl='http://localhost:3000/categories'
  catagorybyID='http://localhost:3000/newProducts?categoryId='
  userUrl='http://localhost:3000/login'
   
  constructor(private http:HttpClient) {

   }

   getAllProducts(){
    return this.http.get(this.productUrl)
   }
   getAllCatagory(){
return this.http.get(this.catagoryURl)
   }
   getAllProductsByCatagory(id:number){
return this.http.get(this.catagorybyID+id)
   }

   getUsers(){
      return this.http.get(this.userUrl)
   }
   postUsers(user:Users){
return this.http.post(this.userUrl,user)
   }


}
