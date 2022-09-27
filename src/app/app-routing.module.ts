import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Components/about/about.component';
import { ArticleComponent } from './Components/article/article.component';
import { LayoutComponent } from './Components/layout/layout.component';
import { ProductsComponent } from './Components/products/products.component';

const routes: Routes = [
  
  {path:'', redirectTo:'Layout',pathMatch:'full'},
  {path:'Layout', component:LayoutComponent},
  {path:'Products', component:ProductsComponent},
  {path:'Article', component:ArticleComponent},
  {path:'About',component:AboutComponent},
 
  {path:'**',redirectTo:'/Layout'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
