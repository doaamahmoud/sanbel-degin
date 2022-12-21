import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/Services/product.service';
import { IProduct } from 'src/app/ViewModels/i-product';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  private  producdID:number=0;
  ProductItem: IProduct={} as IProduct;
  private  ProIdList:number[]=[];
  productList:IProduct[];
  constructor(private productService:ProductService, private activateRoute:ActivatedRoute, private location:Location, private router:Router, private San:DomSanitizer) {
  this.productList=[];
  }

  ngOnInit(): void {
    this.productService.getProductsBySupCategoryID(2002).subscribe(data=>{
      this.productList=data;
      this.productList.forEach(element => {
        element.url=this.San.bypassSecurityTrustUrl('data:image/png;base64,'+element.image)
      });
     
    })
    this.activateRoute.paramMap.subscribe(paramMap=>{
      this.producdID= Number(paramMap.get("pid"));
      this.productService.getProductByID(this.producdID).subscribe(data=>{
        this.ProductItem=data;      
          this.ProductItem.url=this.San.bypassSecurityTrustUrl('data:image/png;base64,'+this.ProductItem.image);
      })
    });
     this.ProIdList=this.GetProduct_IdList();
    
     
  }
  GetProduct_IdList():number[]{
    return this.productList.map(p=>p.id);
 }
    goBack()
    {
      this.location.back();
    }

}
