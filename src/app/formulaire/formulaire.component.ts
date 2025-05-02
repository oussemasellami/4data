import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ResidenceService } from '../service/residence.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  addform!:FormGroup 
constructor(private resService:ResidenceService,private route:Router){}


  ngOnInit(): void {
  this.addform=new FormGroup({
    //id:new FormControl('',[Validators.required,Validators.minLength(5)]),
    name:new FormControl('',[Validators.required,Validators.pattern(/^[A-Z][a-z]/)]),
    address:new FormControl('',Validators.required),
    image:new FormControl('../../assets/images/residence1.jpg',Validators.required),
    status:new FormControl('',[Validators.required,Validators.pattern(/^disponible$/)])
  })
  }
  
  get status(){
    return this.addform.get('status')
  }

  add(){
    console.log(this.addform.value)
    this.resService.addResidence(this.addform.value).subscribe(()=>{
      console.log('addded !!!!')
this.route.navigate(['/residence'])
    })
  }

}
