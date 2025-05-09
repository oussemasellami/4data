import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResidenceService } from '../service/residence.service';
import { Residence } from 'src/core/models/residence';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

constructor(private act:ActivatedRoute,private resService:ResidenceService){}
id!:any
list=new Residence()
  ngOnInit(): void {
    this.id=this.act.snapshot.params['ide']
    this.resService.getResidence(this.id).subscribe((data)=>{
this.list=data
    })

  }

}
