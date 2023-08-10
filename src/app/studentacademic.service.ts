import { HttpClient, HttpParams } from '@angular/common/http';
import { HtmlParser } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentacademicService {

  url ='http://localhost:3000';


  constructor(private http:HttpClient) { }

  Get_Student_Internals_Data(hallticketno,year):Observable<any>{

    let myparams = new HttpParams().set('hallticketno',hallticketno)
   .set('year',year);

    return this.http.get(`${this.url}/studentinternalsdata`,{params:myparams as HttpParams})
  }

  Get_Student_Lab_data(hallticketno , year):Observable<any>{

    let myparams = new HttpParams().set('hallticketno',hallticketno).set('year',year);

    return this.http.get(`${this.url}/studentlabdata`,{params:myparams as HttpParams})
  }

  Get_Student_External_Data(hallticketno ,year):Observable<any>{

   let myparams = new HttpParams().set('hallticketno',hallticketno).set('year',year);

   return this.http.get(`${this.url}/studentexternalsdata`,{params:myparams as HttpParams})
  }

  Get_Student_Attendance_Data(hallticketno,year):Observable<any>{

    let myparams = new HttpParams().set('hallticketno',hallticketno).set('year',year);

    return this.http.get(`${this.url}/studentattendancedata`,{params:myparams as HttpParams});
  }


}
