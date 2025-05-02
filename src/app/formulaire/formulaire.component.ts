import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ResidenceService } from '../service/residence.service';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  addform!:FormGroup 
constructor(private resService:ResidenceService){}


  ngOnInit(): void {
  this.addform=new FormGroup({
    id:new FormControl('',[Validators.required,Validators.minLength(5)]),
    name:new FormControl('',[Validators.required,]),
    address:new FormControl('',Validators.required),
    image:new FormControl('',Validators.required),
    status:new FormControl('',Validators.required)
  })
  }
  

  add(){
    console.log(this.addform.value)
    this.resService.addResidence(this.addform.value).subscribe(()=>{
      console.log('addded !!!!')
    })
  }

}
