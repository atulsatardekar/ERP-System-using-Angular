import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProdServiceService } from 'src/app/services/prod-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  selectedProductIndex: number = -1;
  productsArray: any[] = [];
  catagories: any[] = [];
  customerId: number = 1;
  isSidePanelVisible: boolean = false;
  isEditMode: boolean = false;
  newProduct: any[] = [];

  selectedFile: File | null = null;
  imageSrc: string | ArrayBuffer | null = null;

  productObj: any = {
    title: '',
    image: '',
    price: '',
    categoryId: '',
  };
  formData: any = {
    image: '',
    ratings: null,
    title: '',
    price: '',
    categoryId: null,
  };
  products: any[] = [];
  constructor(private serv: ProdServiceService, private http: HttpClient) {}

  ngOnInit(): void {
    this.productsArray = [
      {
        id: 1,
        name: 'Product 1',
        category: 'Category 1',
        price: 10,
        stockQuantity: 100,
        image: 'assets/iphone x .jpg',
      },
      {
        id: 2,
        name: 'Product 2',
        category: 'Category 2',
        price: 20,
        stockQuantity: 200,
        image: 'assets/iphone7.jpg',
      },
      {
        id: 3,
        name: 'Product 3',
        category: 'Category 1',
        price: 30,
        stockQuantity: 300,
        image: 'assets/iphone6s.jpg',
      },
    ];
  }

  openSidePanel() {
    this.isSidePanelVisible = true;
  }

  closeSidePanel() {
    this.isSidePanelVisible = false;
    this.clearForm();
    console.log("Newly added product:", this.productsArray);
  }

  addNewProduct() {
    if (this.isEditMode) {
      // Update existing product
      this.productsArray[this.selectedProductIndex] = {
        ...this.productObj,
        image: this.imageSrc,
      };
    } else {
      // Add new product
      this.productObj.id = this.productsArray.length + 1;

      const newProduct = {
        ...this.productObj,
        image: this.imageSrc,
      };

      this.productsArray.push(newProduct);
    }
    this.closeSidePanel();
    this.clearForm();
  }

  editProduct(index: number) {
    this.selectedProductIndex = index;
    this.productObj = { ...this.productsArray[index] };
    this.isEditMode = true;
    this.isSidePanelVisible = true;

    this.imageSrc = this.productObj.image;
  }

  deleteProduct(index: number) {
    this.productsArray.splice(index, 1);
  }

  clearForm() {
    this.productObj = {
      id: 0,
      name: '',
      category: '',
      price: 0,
      stockQuantity: 0,
    };
    this.imageSrc = null; 
    this.isEditMode = false;
  }

  triggerFileInput() {
    const fileInput = document.getElementById('fileInput');
    if (fileInput) {
      fileInput.click();
    }
  }
  fileSelect(event: any) {
    const selectedFile = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.imageSrc = reader.result as string;
    };
    reader.readAsDataURL(selectedFile);
  }
}
