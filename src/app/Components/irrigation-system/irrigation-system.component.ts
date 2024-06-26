import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ProductService } from 'src/app/Services/product.service';
import { SupcategoryService } from 'src/app/Services/supcategory.service';
import { IProduct } from 'src/app/ViewModels/i-product';
import { ISupCategory } from 'src/app/ViewModels/i-sup-category';

@Component({
  selector: 'app-irrigation-system',
  templateUrl: './irrigation-system.component.html',
  styleUrls: ['./irrigation-system.component.scss']
})
export class IrrigationSystemComponent implements OnInit {
  SupCategoriesList:ISupCategory[];
  ProductsList:IProduct[];
  categoryID:number=2;
    constructor(private SupCategoryService:SupcategoryService, private productService:ProductService, private San:DomSanitizer) { 
     this.SupCategoriesList=[];
     this.ProductsList=[];
    }
  
    ngOnInit(): void {
      this.SupCategoryService.getSupCategoriesByCategoryID(this.categoryID).subscribe(data=>{
        this.SupCategoriesList=data;
      });
  
      this.productService.getProductsBySupCategoryID(1).subscribe(data=>{
        this.ProductsList=data;
        this.ProductsList.forEach(element => {
          element.url=this.San.bypassSecurityTrustUrl('data:image/png;base64,'+element.image)
        });
       
      })
      
   }
   showProducts(id:number){
    this.productService.getProductsBySupCategoryID(id).subscribe(data=>{
      this.ProductsList=data;
      this.ProductsList.forEach(element => {
        element.url=this.San.bypassSecurityTrustUrl('data:image/png;base64,'+element.image)
      });
     
    })
   }
  

}
