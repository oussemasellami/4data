import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResidenceComponent } from './residence/residence.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { DetailsComponent } from './details/details.component';
import { UpdateComponent } from './update/update.component';

const rRoot:Routes=[
  {path:'',redirectTo:"residence",pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"residence",component:ResidenceComponent},
  {path:"formulaire",component:FormulaireComponent},
  {path:"details/:ide",component:DetailsComponent},
  {path:"update/:ide",component:UpdateComponent},
  {path:"**",component:HomeComponent}

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
      RouterModule.forRoot(rRoot),
  ],
    
  exports:[RouterModule]
})
export class AppRoutingModule { }
