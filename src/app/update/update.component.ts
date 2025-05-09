import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResidenceService } from '../service/residence.service';
import { Residence } from 'src/core/models/residence';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
 addform!:FormGroup 
  constructor(private act:ActivatedRoute,private route:Router,private resService:ResidenceService){}
  id!:any
  list=new Residence()
    ngOnInit(): void {
      this.id=this.act.snapshot.params['ide']

        this.addform=new FormGroup({
          //id:new FormControl('',[Validators.required,Validators.minLength(5)]),
          name:new FormControl('',[Validators.required,Validators.pattern(/^[A-Z][a-z]/)]),
          address:new FormControl('',Validators.required),
          image:new FormControl('',Validators.required),
          status:new FormControl('',[Validators.required,Validators.pattern(/^disponible$/)])
        })
      this.resService.getResidence(this.id).subscribe((data)=>{
  this.list=data
  this.addform.patchValue(this.list as any)
      })

}

get status(){
  return this.addform.get('status')
}
update(){

  this.resService.updateResidence(this.id,this.addform.value).subscribe(()=>{
    console.log("updated!!!!")
    this.route.navigate(['/residence'])
  })

}
}
