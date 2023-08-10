import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
}) 
export class MentorexamdataService {

  url  ='http://localhost:3000'

  constructor(private http : HttpClient) { }

  Get_Subject_Data(year:number,semester:number,hallticketno):any{

    let myparams = new HttpParams().set('year',year).set('semester',semester).set('hallticketno',hallticketno)

    return new Promise((resolve,reject)=>{

      this.http.get(`${this.url}/getcsesyllabus`,{params:myparams as HttpParams}).subscribe((data)=>{

        resolve(data)
      })
    })

  }

  Put_Subjects_Data(data,hallticketno,year,semester){

    let myparams = new HttpParams().set("hallticketno",hallticketno).set('year',year).set('semester',semester);

    this.http.post(`${this.url}/setexternalsdata`,data,{params:myparams as HttpParams}).subscribe((res)=>{
      console.log(res)
    })
  }


  Get_Internals_Data(year:number,semester:number,hallticketno):any{

    let myparams = new HttpParams().set('hallticketno',hallticketno)
    .set('year',year).set('semester',semester);

    return new Promise((resolve,reject)=>{

      this.http.get(`${this.url}/getinternalmarks`,{params:myparams as HttpParams}).subscribe((data)=>{
        resolve(data)
      })

    })


   



  }

  Put_Internals_Data(){}
}
