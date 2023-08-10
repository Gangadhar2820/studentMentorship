import { Injectable } from '@angular/core';
import { student } from './student';
import { HttpClient } from '@angular/common/http';
import { Observable, async } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StudentListService {

  _url :string = 'http://localhost:3000';

  constructor(private _http : HttpClient ) { }

  hallticketno : String ; 
  dateofbirth : String ;

  studentList : student[]=[
    {name : 'Gangadhar Rongala',hallticketno:'21471A0521',dateofbirth:'15-08-2004',phoneno:'9182233993',email:'ganga@gmail.com',admissionno:'cse521'},
 
    {name : 'Gopikrishna nallamekala',hallticketno:'21471A0539',dateofbirth:'12-12-2002',phoneno:'999999999',email:'gopi@gmail.com',admissionno:'cse539'},
 
    {name : 'Ranga Macharla',hallticketno:'21471A0505',dateofbirth:'1-1-2002',phoneno:'88888888',email:'ranga@gmail.com',admissionno:'cse505'}
  ]


  studentExists(hallticketno: String, dateofbirth: String): any {


    const myStudents = [];  
  
    return new Promise((resolve, reject) => {

      this.get_Student_Login_data().subscribe((data) => {
        for (let student of data) {
          myStudents.push(student);
        }
  
        for (let student of myStudents) {
          if (student.HALLTICKETNO.toLowerCase() == hallticketno.toLowerCase() && student.PASSWORD == dateofbirth) {
            resolve(true);
            return;
          }
        }
  
        resolve(false);
      }, (error) => {
        reject(error);
      });
    });
  }
  

  getLoggedStudent(hallticketno: String): any {

    return new Promise((resolve, reject) => {
      this.get_Student_College_Data().subscribe((data) => {
        let matchingStudent = null;
  
        for (let student of data) {
          if (student.HALLTICKETNO.toLowerCase() == hallticketno.toLowerCase()) {
            matchingStudent = student;
            break;
          }
        }
  
        if (matchingStudent) {
          resolve(matchingStudent);
        } else {
          reject('Student not found');
        }
      }, (error) => {
        reject(error);
      });
    });
  }

  getStudentPersonalData(hallticketno : String):any{
    

   return new Promise((resolve,reject)=>{

    let matchedStudent ;

      this.get_Student_Personal_Data().subscribe((data)=>{

        for(let student of data){

          if(hallticketno.toLowerCase() == student.HALLTICKETNO.toLowerCase()){
            matchedStudent = student;
            break;
          } 
        }

        if(matchedStudent){
        
          resolve(matchedStudent)
        }
      })
    })

  }
  


  
  
  

  get_Student_Login_data():Observable<any>{

    return this._http.get(`${this._url}/studentlogindata`)
  }

  get_Student_College_Data():Observable<any>{

    return this._http.get(`${this._url}/studentcollegedata`)
  }

  get_Student_Personal_Data():Observable<any>{

    return this._http.get(`${this._url}/studentpersonaldata`)
  }

}
