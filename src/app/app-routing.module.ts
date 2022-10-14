import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Components/about/about.component';
import { ContactUSComponent } from './Components/contact-us/contact-us.component';
import { FeasibilityStudyComponent } from './Components/feasibility-study/feasibility-study.component';
import { HomeComponent } from './Components/home/home.component';
import { LayoutComponent } from './Components/layout/layout.component';
import { ProductsComponent } from './Components/products/products.component';

const routes: Routes = [
{path:'',component:LayoutComponent, children:[
  {path:'',redirectTo:'/Home',pathMatch:'full'},
  {path:'Home',component:HomeComponent}, 
  {path:'Products', component:ProductsComponent},
  {path:'About',component:AboutComponent},
  {path:'study',component:FeasibilityStudyComponent},
  {path:'ContactUS',component:ContactUSComponent}
]},
  {path:'**',redirectTo:'/Home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
