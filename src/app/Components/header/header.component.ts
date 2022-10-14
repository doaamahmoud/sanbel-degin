import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/Services/category.service';
import { Category } from 'src/app/ViewModels/category';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  Categories:Category[];
  constructor(private categoryService:CategoryService) {
    this.Categories=[];
   }

  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe(data=>{
      console.log(data);
      this.Categories=data;
    })
  }

}
