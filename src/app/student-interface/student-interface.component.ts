import { Component, OnInit,AfterViewInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentListService } from '../student-list.service';
import { student } from '../student';
import { PrimeNGConfig } from 'primeng/api';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-student-interface',
  templateUrl: './student-interface.component.html',
  styleUrls: ['./student-interface.component.css']
})
export class StudentInterfaceComponent implements OnInit ,AfterViewInit{

  hallticketno : String;
  loggedStudent :any='' ;
  sidebarVisible : boolean =true;
  dropdownVisible :boolean=false;

  constructor(private primengConfig : PrimeNGConfig,private  activatedRoute : ActivatedRoute,private studentListService : StudentListService
    ,private toast : MessageService){}

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe((data)=>{
      this.hallticketno = data.get('hallticketno')
    })
     this.studentListService.getLoggedStudent(this.hallticketno).then((student)=>{

      this.loggedStudent=student;

      let name:String = this.loggedStudent.FIRSTNAME+'  '+this.loggedStudent.LASTNAME;

      this.toast.add({severity:'success',summary:'Login Success',detail:'Welcome  '+name , life:2500,closable:false});
  
      
     }) 
     
  
      
  }
  ngAfterViewInit(): void {
    
    
    
  }


}
