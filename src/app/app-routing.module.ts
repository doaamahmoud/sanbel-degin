import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Components/about/about.component';
import { ContactUSComponent } from './Components/contact-us/contact-us.component';
import { FeasibilityStudyComponent } from './Components/feasibility-study/feasibility-study.component';
import { HomeComponent } from './Components/home/home.component';
import { IrrigationSystemComponent } from './Components/irrigation-system/irrigation-system.component';
import { LayoutComponent } from './Components/layout/layout.component';
import { ProductsComponent } from './Components/products/products.component';
import { SolarEnergySolutionsComponent } from './Components/solar-energy-solutions/solar-energy-solutions.component';

const routes: Routes = [
{path:'',component:LayoutComponent, children:[
  {path:'',redirectTo:'/Home',pathMatch:'full'},
  {path:'Home',component:HomeComponent}, 
  {path:'Fertilizers & pesticides ', component:ProductsComponent},
  {path :'Irrigation system supply', component:IrrigationSystemComponent},
  {path:'Solar energy solutions', component:SolarEnergySolutionsComponent},
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
