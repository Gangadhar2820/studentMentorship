import { Injectable} from '@angular/core';
import { mentor } from './mentor';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MentorListService {

  username : String;
  password : String;
  regFirstname :String ;
  regLastname :String;
  regEmail :String ;

  url ='http://localhost:3000';


  constructor(private http : HttpClient) { }

  

   mentorsList :mentor[] =[

    { firstname:'gangadhar',lastname:'rongala',phoneno:"9182233993",username:'Gangadhar2820'
  ,password:'Ganga@2820',email:'ganga@gmail.com',mentorid:'521'},
  { firstname:'Gopikrishna',lastname:'nallamekhala',phoneno:"9999999999",username:'Gopi539'
  ,password:'gopi539',email:'gopi@gmail.com',mentorid:'539'},
  { firstname:'ranga',lastname:'macharla',phoneno:"88888888",username:'Ranga505'
  ,password:'ranga505',email:'ranga@gmail.com',mentorid:'505'}
    
   ]

   mentorExists(username:String , password :String ):any{

    return new Promise((resolve,reject)=>{

      this.Get_Mentor_Login_Data(username,password).subscribe((data)=>{

        if(data.length != 0){
          resolve(true);
          return;
        }
        resolve(false)

      })
    })
  }


  getMentorId(username:String , password :String){

    return new Promise((resolve,reject)=>{

      this.Get_Mentor_Login_Data(username,password).subscribe((data)=>{

        if(data.length != 0){
          resolve(data[0].MENTORID);
          return;

        }
        resolve(null)
      })
    })

    

  }

  getLoggedMentor(mentorid : String):any{

    for( let mentor of this.mentorsList ){

      if(mentor.mentorid == mentorid){

        return mentor
      }

    }

  }

  mentorMailCheck(mentorMail : String):boolean{

    for( let mentor of this.mentorsList ){

      if(mentor.email == mentorMail){

        return true
      }

    }

    return false
  }

  mentorIdCheck(mentorId : String):boolean{

    for( let mentor of this.mentorsList ){

      if(mentor.mentorid == mentorId){

        this.regFirstname = mentor.firstname;
        this.regLastname = mentor.lastname;
        this.regEmail = mentor.email;

        return true
      }

    }
  
    return false
  }

  Get_Mentor_Login_Data(username,password):Observable<any>{

   let  myparams = new HttpParams().set('username',username).set('password',password);

   return this.http.get(`${this.url}/mentorlogindata`,{params : myparams as HttpParams})


  }

  }

  



