import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import{FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ResidenceComponent } from './residence/residence.component'
import {HttpClientModule} from '@angular/common/http';
import { FormulaireComponent } from './formulaire/formulaire.component'
import {RouterModule, Routes} from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component'

const rRoot:Routes=[
  {path:'',redirectTo:"residence",pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"residence",component:ResidenceComponent},
  {path:"formulaire",component:FormulaireComponent},
  {path:"**",component:HomeComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ResidenceComponent,
    FormulaireComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(rRoot)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
