import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProdServiceService } from 'src/app/services/prod-service.service';
import { Users } from 'src/app/UserModal/userModal';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userModalObj:Users=new Users()
  userForm!:FormGroup
  addedProducts: any[] = [];
  RegisterdUser:any[]=[]
  nextCustId: number = 1;
  showProductSection: boolean = false;
  isOrderComponentVisible: boolean = false;
    totalProducts: number = 0;
  totalOrders: number = 0;
  
constructor(private fb:FormBuilder, private http:ProdServiceService){

}
ngOnInit(){
this.userForm=this.fb.group({

  Username:[''],
  Password:[''],
  contactNumber:['']

})

}

addUsers(){
  this.userModalObj.CustId = this.nextCustId;
  this.nextCustId++; 

  this.userModalObj.Username=this.userForm.value.Username
  this.userModalObj.Password=this.userForm.value.Password
  this.userModalObj.contactNumber=this.userForm.value.contactNumber


  this.http.postUsers(this.userModalObj).subscribe((res:any)=>{
   console.log('user added successfully',res)
   alert('user created successfully')



   

this.createdUser()
this.userForm.reset()

  })
}
createdUser(){
  this.http.getUsers().subscribe((res:any)=>{
    this.RegisterdUser=res
    
  })
}

resetForm(){
  this.userForm.reset()
}

toggleOrderComponent() {
  this.isOrderComponentVisible = !this.isOrderComponentVisible;
}
addToCart(product: any) {
  this.addedProducts.push(product);
}

}
