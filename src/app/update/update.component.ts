import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResidenceService } from '../service/residence.service';
import { Residence } from 'src/core/models/residence';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

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
