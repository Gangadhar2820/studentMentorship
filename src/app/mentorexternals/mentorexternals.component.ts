import { Component, OnInit } from '@angular/core';
import { MentorexamdataService } from '../mentorexamdata.service';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-mentorexternals',
  templateUrl: './mentorexternals.component.html',
  styleUrls: ['./mentorexternals.component.css']
})
export class MentorexternalsComponent implements OnInit{

  constructor(private mentorExamService:MentorexamdataService,private fb :FormBuilder){
    this.myReactiveForm = this.fb.group({ 
      marksArray : this.fb.array([])
    });

    
  }

  subjectsData=[];

  years;
  semesters;
  rollno;
  selectedYear ;
  selectedSemester;
  selectedRollno;

  myReactiveForm :FormGroup;

  verifyDetail =[{FIRSTNAME:'',LASTNAME:''}];

    ngOnInit() {
        this.years = [
            { name: 'I Year', code: 1 },
            { name: 'II Year', code: 2 },
            { name: 'III Year', code: 3 },
            { name: 'IV Year', code: 4 }    
        ];

      

        this.semesters=[
          {name : 'I Semester',code:1},
          {name:'II Semester',code:2}
        ]

        this.rollno=['21471A0521','21471A0539']
    }


  logData(){

    this.myReactiveForm = this.fb.group({
      marksArray : this.fb.array([])
    });
    
    this.subjectsData=[]
    this.mentorExamService.Get_Subject_Data(this.selectedYear.code,this.selectedSemester.code,this.selectedRollno).then((data)=>{
      this.verifyDetail = data[2];
      for(let i of data[0]){
        for(let j of data[1]){
          if(i.SUBJECTCODE == j.SUBJECTCODE){
            this.subjectsData.push({"SUBJECTCODE":i.SUBJECTCODE,"SUBJECTNAME":i.SUBJECTNAME,
            "GRADE":j.GRADE,"GRADEPOINTS":j.GRADEPOINTS,"CREDITS":j.CREDITS})
          }
        }
      }
      
      if(this.subjectsData.length != data[0].length){
        for(let i of data[0]){
          this.subjectsData.push({"SUBJECTCODE":i.SUBJECTCODE,"SUBJECTNAME":i.SUBJECTNAME,
          "GRADE":null,"GRADEPOINTS":null,"CREDITS":null})
        }
      }

      for(let i of this.subjectsData){

       (<FormArray> this.myReactiveForm.get('marksArray')).push(this.fb.group({
        subjectcode: [i.SUBJECTCODE, Validators.required],
      subjectname: [i.SUBJECTNAME, Validators.required],
      grade: [i.GRADE, Validators.required],
      gradepoints: [i.GRADEPOINTS, Validators.required],
      credits: [i.CREDITS, Validators.required] 
       }))
 
      } 
      
    }) 

  }


   send_Externals_Data() {

    this.mentorExamService.Put_Subjects_Data(this.myReactiveForm.get('marksArray').value,this.selectedRollno,this.selectedYear.code,this.selectedSemester.code)
  }

}
 