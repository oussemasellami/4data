import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Residence } from 'src/core/models/residence';

@Injectable({
  providedIn: 'root'
})
export class ResidenceService {

  constructor(private http:HttpClient) { }

  getallResidence():Observable<Residence[]>{
    return this.http.get<Residence[]>("http://localhost:3000/residence")
  }

  getResidence(id:any):Observable<Residence>{
    return this.http.get<Residence>("http://localhost:3000/residence"+"/"+id)
  }

  deleteResidence(id:any):Observable<Residence[]>{
    return this.http.delete<Residence[]>("http://localhost:3000/residence"+"/"+id)
  }

  addResidence(res:Residence):Observable<Residence[]>{
    return this.http.post<Residence[]>("http://localhost:3000/residence",res)
  }

  
  updateResidence(id:any,res:Residence):Observable<Residence[]>{
    return this.http.put<Residence[]>("http://localhost:3000/residence"+"/"+id,res)
  }

}
