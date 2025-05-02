import { Component, OnInit } from '@angular/core';
import { Residence } from 'src/core/models/residence';
import { ResidenceService } from '../service/residence.service';

@Component({
  selector: 'app-residence',
  templateUrl: './residence.component.html',
  styleUrls: ['./residence.component.css']
})
export class ResidenceComponent implements OnInit {
  search=''
  listResidences:Residence[]=[
    {id:1,"name": "El fel","address":"Borj Cedria", "image":"../../assets/images/residence1.jpg", status: "Disponible"},
     {id:2,"name": "El yasmine", "address":"Ezzahra","image":"../../assets/images/residence2.jpg", status: "Disponible" },
     {id:3,"name": "El Arij", "address":"Rades","image":"../../assets/images/residence3.jpg", status: "Vendu"},
     {id:4,"name": "El Anber","address":"inconnu", "image":"../../assets/images/residence1.jpg", status: "En Construction"}
   ];

   listeServiceResidence:Residence[]=[]
   constructor(private resService:ResidenceService){

   }
  ngOnInit(): void {
    
    this.resService.getallResidence().subscribe((data)=>{
this.listeServiceResidence=data
console.log(this.listeServiceResidence)
    })
  }
 
   searchbyname(){

    return this.listeServiceResidence.filter(r=>r.name.toLowerCase().includes(this.search.toLowerCase()))

   }

   deleteResidence(id:any){

this.resService.deleteResidence(id).subscribe(()=>{
  this.ngOnInit()
  console.log("deleted !!!")
})
   }

}
