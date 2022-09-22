import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './Components/layout/layout.component';

const routes: Routes = [
  
  {path:'', redirectTo:'Layout',pathMatch:'full'},
  {path:'Layout', component:LayoutComponent},
 
  {path:'**',redirectTo:'/Layout'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
