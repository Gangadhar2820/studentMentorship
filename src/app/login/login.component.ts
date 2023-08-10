import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import {FormGroup , FormControl} from '@angular/forms';
import { MentorValidationGuard } from '../mentor-validation.guard';
import { MentorListService } from '../mentor-list.service';
import {  Router } from '@angular/router';
import { StudentListService } from '../student-list.service';
import { StudentValidationGuard } from '../student-validation.guard';
import { MessageService } from 'primeng/api';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  studentDialogVisible:boolean = false;
  mentorDialogVisible:boolean;
  registerDialogVisible:boolean;
  passwordDialogVisible:boolean;
  
  constructor(private primengConfig: PrimeNGConfig,private mentorAuthGuard :MentorValidationGuard,
    private mentorListService : MentorListService,private route : Router,private studentListService : StudentListService
    ,private studentAuthGuard : StudentValidationGuard,private toast : MessageService) {}



  showDialog(user:string) {
    if(user == 'student'){
      this.passwordDialogVisible=false;
      this.studentDialogVisible= true;
      this.mentorDialogVisible = false;
      this.registerDialogVisible = false;
    }
    else if(user == 'mentor'){
      this.passwordDialogVisible=false;
      this.studentDialogVisible = false;
      this.mentorDialogVisible = true;
      this.registerDialogVisible = false;
    } 
    else if(user == 'register'){
      this.passwordDialogVisible=false;
      this.studentDialogVisible = false;
      this.mentorDialogVisible = false;
      this.registerDialogVisible = true;
    }
    else if(user == 'password'){
      this.passwordDialogVisible=true;
      this.studentDialogVisible= false;
      this.mentorDialogVisible = false;
      this.registerDialogVisible =false;
    }
  }

studentLoginForm :FormGroup;
mentorLoginForm : FormGroup;
mentorPasswordVerifyForm:FormGroup;
mentorNewPasswordForm :FormGroup;
mentorRegisterVerifyForm:FormGroup;
mentorRegistrationForm:FormGroup;


ngOnInit() {
  this.primengConfig.ripple = true;

  this.studentLoginForm = new FormGroup(
  {
    hallticket : new FormControl(''),

    password : new FormControl(null)
    
  });

  this.mentorLoginForm = new FormGroup({

    username : new FormControl(null),
    password :new FormControl(null)
  })

  this.mentorPasswordVerifyForm = new FormGroup(
    {
       verifyemail : new FormControl(null)
    }
  )

  this.mentorNewPasswordForm = new FormGroup({

    newpassword : new FormControl(''),
    confirmpassword : new FormControl('')

  })

  this.mentorRegisterVerifyForm = new FormGroup({

    verifymentorid : new FormControl(null)

  })

  this.mentorRegistrationForm = new FormGroup({

    firstname : new FormControl(null),
    lastname : new FormControl(null),
    phoneno : new FormControl(null),
    altphoneno : new FormControl(null),
    username : new FormControl(null),
    email : new FormControl(null),
    password : new FormControl(null),
    confirmpassword : new FormControl(null),
    profileimage : new FormControl(null),
    terms : new FormControl(null)

  })
}
studentLoginSubmit(){

  this.studentAuthGuard.setStudentDetails(this.studentLoginForm.get('hallticket').value,this.studentLoginForm.get('password').value);
  
  this.route.navigateByUrl('student/'+this.studentLoginForm.get('hallticket').value);


  this.studentListService.studentExists(this.studentLoginForm.get('hallticket').value,this.studentLoginForm.get('password').value).then((data)=>{
    
    if(!data){

      this.toast.add({ severity: 'error', summary: 'Invalid Login', detail: 'Please check your Hallticket and Password and Try again' ,closable:false,life:3500});
    
    }
  })
  
 

  
}
onStuLogDialogHide(){

  this.studentLoginForm.reset();
  

}

mentorLoginSubmit(){

 this.mentorAuthGuard.sentMentorDetails(this.mentorLoginForm.get('username').value,this.mentorLoginForm.get('password').value);

this.mentorListService.mentorExists(this.mentorLoginForm.get('username').value,this.mentorLoginForm.get('password').value).then((value)=>{

  if(value){

    this.mentorListService.getMentorId(this.mentorLoginForm.get('username').value,this.mentorLoginForm.get('password').value).then((data)=>{
      
      this.route.navigateByUrl('mentor/'+data) 
      
    })
   }else{
    this.toast.add({ severity: 'error', summary: 'Invalid Login', detail: 'Please check your Username and Password and Try again' ,closable:false,life:3500});
   }
})

}

onMenLogDialogHide(){

  this.mentorLoginForm.reset(); 

}

verifyIcon ;
VerifyLabel :string = "Verify";
verifyClass :string ='p-button-primary';
VerifiedValue : boolean =false;
verifyLoading : boolean = false;
verifyTextValue ='';
verifyWarnText =this.verifyTextValue;
verifyShowWarn = false;



defaultMentorId : string ="abc";

mentorPasswordVerifySubmit(){
  
  this.verifyLoading = true;
  this.VerifyLabel = 'Verifying..';
  this.verifyTextValue = this.mentorPasswordVerifyForm.get('verifyemail').value;
  setTimeout(() => {
    this.verifyLoading = false;
    if(this.mentorListService.mentorMailCheck(this.mentorPasswordVerifyForm.get('verifyemail').value)){
      this.verifyIcon = 'pi pi-check-circle';
      this.VerifyLabel= 'Valid';
      this.verifyClass='p-button-success';
      this.verifyShowWarn =false ;
      this.VerifiedValue = true;

    }
    else{

      this.verifyIcon = 'pi pi-times-circle';
      this.VerifyLabel= 'Invalid';
      this.verifyClass='p-button-danger';
      this.verifyShowWarn =true ;
      this.verifyWarnText = this.verifyTextValue;
      this.VerifiedValue = false;

 
    }
    
  }, 2000);
}

onMenPassDialogHide(){

this.verifyIcon = null;
this.VerifyLabel  = "Verify";
this.verifyClass  ='p-button-primary';
this.VerifiedValue  =false;
this.verifyLoading  = false;
this.verifyTextValue ='';
this.verifyWarnText =this.verifyTextValue;
this.verifyShowWarn = false;

this.mentorPasswordVerifyForm.reset();
this.mentorNewPasswordForm.reset();


}

mentorNewPasswordSubmit(){

  console.log(this.mentorNewPasswordForm.get('newpassword').value);
  console.log(this.mentorNewPasswordForm.get('confirmpassword').value);

}

passwordEquals :boolean =true;

passwordMatch(){
 this.passwordEquals =  this.mentorNewPasswordForm.get('newpassword').value == this.mentorNewPasswordForm.get('confirmpassword').value;
}

mentoridVerifySubmit(){

  this.verifyLoading = true;
  this.VerifyLabel = 'Verifying..';
  this.verifyTextValue = this.mentorRegisterVerifyForm.get('verifymentorid').value;
  console.log(this.verifyTextValue)
  setTimeout(() => {
    this.verifyLoading = false;
    if(this.mentorListService.mentorIdCheck( this.mentorRegisterVerifyForm.get('verifymentorid').value)){
      this.verifyIcon = 'pi pi-check-circle';
      this.VerifyLabel= 'Valid';
      this.verifyClass='p-button-success';
      this.verifyShowWarn =false ;
      this.VerifiedValue = true;
      this.mentorRegistrationForm.patchValue({
        firstname :this.mentorListService.regFirstname,
        lastname:this.mentorListService.regLastname,
        email:this.mentorListService.regEmail
      })

    }
    else{

      this.verifyIcon = 'pi pi-times-circle';
      this.VerifyLabel= 'Invalid';
      this.verifyClass='p-button-danger';
      this.verifyShowWarn =true ;
      this.verifyWarnText = this.verifyTextValue;
      this.VerifiedValue = false;


    }
    
  }, 2000);

}

onMenRegDialogHide(){

this.verifyIcon = null;
this.VerifyLabel  = "Verify";
this.verifyClass  ='p-button-primary';
this.VerifiedValue  =false;
this.verifyLoading  = false;
this.verifyTextValue ='';
this.verifyWarnText =this.verifyTextValue;
this.verifyShowWarn = false;

this.mentorRegisterVerifyForm.reset();
this.mentorRegistrationForm.reset();

}

menRegFormSubmit(){

  console.log(this.mentorRegistrationForm)

}

registerPasswordEquals :boolean =true;

registerPassMatch(){
  
  this.registerPasswordEquals = this.mentorRegistrationForm.get('password').value == this.mentorRegistrationForm.get('confirmpassword').value;
}



}
