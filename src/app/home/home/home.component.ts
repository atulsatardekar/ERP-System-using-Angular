import { Component } from '@angular/core';
import { ProdServiceService } from 'src/app/services/prod-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  productsArray:any[]=[]
  categories:any[]=[]
  selectedCategory:number=0

constructor(private serv:ProdServiceService){
  
}

ngOnInit(): void {
  this. loadProducts()
  this.loadCatagory()
}
loadProducts(){
  this.serv.getAllProducts().subscribe((res:any)=>{
this.productsArray=res
  })
}
loadCatagory(){
this.serv.getAllCatagory().subscribe((res:any)=>{
this.categories=res
})

}

getAllProductsByCategory(categoryId:number){
  this.selectedCategory=categoryId
  this.serv.getAllProductsByCatagory(categoryId).subscribe((res:any)=>{
this.productsArray=res
  })
}
}
