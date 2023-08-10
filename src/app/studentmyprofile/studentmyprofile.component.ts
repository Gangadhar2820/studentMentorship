import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentListService } from '../student-list.service';

@Component({
  selector: 'app-studentmyprofile',
  templateUrl: './studentmyprofile.component.html',
  styleUrls: ['./studentmyprofile.component.css']
})
export class StudentmyprofileComponent {

  hallticketno : String='';
  loggedStudent :any='' ;

  studentPersonalData :any ='';

  constructor(private  activatedRoute : ActivatedRoute,private studentListService : StudentListService){}

  ngOnInit(): void {

    this.hallticketno=this.activatedRoute.snapshot.parent.params['hallticketno'] ;

    this.studentListService.getLoggedStudent(this.hallticketno.toUpperCase()).then((data)=>{
      this.loggedStudent=data;
    })

    this.studentListService.getStudentPersonalData(this.hallticketno).then((data)=>{
      this.studentPersonalData = data;
      
    })
  
}
}