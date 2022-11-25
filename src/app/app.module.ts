import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { LayoutComponent } from './Components/layout/layout.component';
import { HomeComponent } from './Components/home/home.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ProductsComponent } from './Components/products/products.component';
import { AboutComponent } from './Components/about/about.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FeasibilityStudyComponent } from './Components/feasibility-study/feasibility-study.component';
import { ContactUSComponent } from './Components/contact-us/contact-us.component';
import { IrrigationSystemComponent } from './Components/irrigation-system/irrigation-system.component';
import { SolarEnergySolutionsComponent } from './Components/solar-energy-solutions/solar-energy-solutions.component';
import { FarmManagementComponent } from './Components/farm-management/farm-management.component';
import { ConsultingAdvisingComponent } from './Components/consulting-advising/consulting-advising.component';
import { SanableLaboratoryComponent } from './Components/sanable-laboratory/sanable-laboratory.component';
import { SanableAcademyComponent } from './Components/sanable-academy/sanable-academy.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LayoutComponent,
    HomeComponent,
    FooterComponent,
    ProductsComponent,
    AboutComponent,
    FeasibilityStudyComponent,
    ContactUSComponent,
    IrrigationSystemComponent,
    SolarEnergySolutionsComponent,
    FarmManagementComponent,
    ConsultingAdvisingComponent,
    SanableLaboratoryComponent,
    SanableAcademyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
