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
import { NotfoundComponent } from './notfound/notfound.component';
import { AppRoutingModule } from './app-routing.module';
import { DetailsComponent } from './details/details.component';
import { UpdateComponent } from './update/update.component'



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ResidenceComponent,
    FormulaireComponent,
    NotfoundComponent,
    DetailsComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
