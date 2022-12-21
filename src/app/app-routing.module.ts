import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Components/about/about.component';
import { ArticleDetailsComponent } from './Components/article-details/article-details.component';
import { ConsultingAdvisingComponent } from './Components/consulting-advising/consulting-advising.component';
import { ContactUSComponent } from './Components/contact-us/contact-us.component';
import { DealsComponent } from './Components/deals/deals.component';
import { FarmManagementComponent } from './Components/farm-management/farm-management.component';
import { FeasibilityStudyComponent } from './Components/feasibility-study/feasibility-study.component';
import { HomeComponent } from './Components/home/home.component';
import { IrrigationSystemComponent } from './Components/irrigation-system/irrigation-system.component';
import { LayoutComponent } from './Components/layout/layout.component';
import { PartnersComponent } from './Components/partners/partners.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { ProductsComponent } from './Components/products/products.component';
import { SanableAcademyComponent } from './Components/sanable-academy/sanable-academy.component';
import { SanableLaboratoryComponent } from './Components/sanable-laboratory/sanable-laboratory.component';
import { SolarEnergySolutionsComponent } from './Components/solar-energy-solutions/solar-energy-solutions.component';

const routes: Routes = [
{path:'',component:LayoutComponent, children:[
  {path:'',redirectTo:'/Home',pathMatch:'full'},
  {path:'Home',component:HomeComponent},
  {path:'Home/Article/:Aid',component:ArticleDetailsComponent},
  {path:'Fertilizers & pesticides', component:ProductsComponent},
  {path:'Products/:pid',component:ProductDetailsComponent },
  {path:'Irrigation system supply', component:IrrigationSystemComponent},
  {path:'Solar energy solutions', component:SolarEnergySolutionsComponent},
  {path:'About',component:AboutComponent},
  {path:'Feasibility studies',component:FeasibilityStudyComponent},
  {path:'Farm Management',component:FarmManagementComponent},
  {path:'Consulting & Advising', component:ConsultingAdvisingComponent},
  {path:'Sanable Laboratory', component:SanableLaboratoryComponent},
  {path:'Sanable Academy', component:SanableAcademyComponent},
  {path:'partners',component:PartnersComponent},
  {path:'Deals',component:DealsComponent},
  {path:'ContactUS',component:ContactUSComponent}
]},
  {path:'**',redirectTo:'/Home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
