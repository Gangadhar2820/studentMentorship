import { Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentacademicService } from '../studentacademic.service';

@Component({
  selector: 'app-studentacademicyear',
  templateUrl: './studentacademicyear.component.html',
  styleUrls: ['./studentacademicyear.component.css']
})
export class StudentacademicyearComponent implements OnInit ,DoCheck{

  currentSemester : number = 1 ;
  currentSemProperty : number = 1 ;
  currentYear : number ;

  hallticketno;

  attendanceData: any;

  attendancePercentage ;

  attendPresence =0;

  options: any;

  internalSubjects =[] ;

  internalLabs =[];

  externalSubjects =[];


  constructor(private currentRoute : ActivatedRoute,private studentAcademicService :StudentacademicService ){}

  semSelection(event ){
    this.currentSemester = event.index + 1;
    for(let attend of this.attendancePercentage){
      if(attend.YEAR == this.currentYear && attend.SEMESTER == this.currentSemester){
        this.attendPresence = attend.ATTENDANCE;
        break;
      }
    }

    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    this.attendanceData = {
      labels: ['Absent  ' +(100-this.attendPresence).toString()+'%','Present  '+this.attendPresence.toString()+'%'],
      datasets: [
          {
              data: [100-this.attendPresence,this.attendPresence],
              backgroundColor: [ documentStyle.getPropertyValue('--red-500'), documentStyle.getPropertyValue('--green-500')],
              hoverBackgroundColor: [ documentStyle.getPropertyValue('--red-400'), documentStyle.getPropertyValue('--green-400')]
          }
      ]
  };


  this.options = {
      cutout: '60%',
      plugins: {
          legend: {
              labels: {
                  color: textColor
              }
          }
      }
  };
  

    
  }

  semPropertySelection(event){
    this.currentSemProperty =event.index + 1;
    for(let attend of this.attendancePercentage){
      if(attend.YEAR == this.currentYear && attend.SEMESTER == this.currentSemester){
        this.attendPresence = attend.ATTENDANCE;
        break;
      }
    }
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    this.attendanceData = {
      labels: ['Absent  ' +(100-this.attendPresence).toString()+'%','Present  '+this.attendPresence.toString()+'%'],
      datasets: [
          {
              data: [100-this.attendPresence,this.attendPresence],
              backgroundColor: [ documentStyle.getPropertyValue('--red-500'), documentStyle.getPropertyValue('--green-500')],
              hoverBackgroundColor: [ documentStyle.getPropertyValue('--red-400'), documentStyle.getPropertyValue('--green-400')]
          }
      ]
  };


  this.options = {
      cutout: '60%',
      plugins: {
          legend: {
              labels: {
                  color: textColor
              }
          }
      }
  };
    
  }

  ngOnInit(): void {

    


    this.hallticketno = this.currentRoute.snapshot.parent.params['hallticketno'];
    
    this.currentRoute.paramMap.subscribe((data) =>{

      this.currentYear =  parseInt(data.get('no'));

      this.studentAcademicService.Get_Student_Internals_Data(this.hallticketno,this.currentYear).subscribe((data)=>{

        this.internalSubjects = data;
      
      })

      this.studentAcademicService.Get_Student_Lab_data(this.hallticketno,this.currentYear).subscribe((data)=>{


      this.internalLabs =data;
      })

      this.studentAcademicService.Get_Student_External_Data(this.hallticketno,this.currentYear).subscribe((data)=>{
        this.externalSubjects=data;
      })

      this.studentAcademicService.Get_Student_Attendance_Data(this.hallticketno,this.currentYear).subscribe(
        (data)=>{
          this.attendancePercentage=data;

          

        
        if(data.length !=0){
          for(let attend of this.attendancePercentage){
            if(attend.YEAR == this.currentYear && attend.SEMESTER == this.currentSemester){
              this.attendPresence = attend.ATTENDANCE;
              break;
            }
          }
        }else{
          this.attendPresence=0;
        
        }

          const documentStyle = getComputedStyle(document.documentElement);
          const textColor = documentStyle.getPropertyValue('--text-color');
      
      
          this.attendanceData = {
            labels: ['Absent  ' +(100-this.attendPresence).toString()+'%','Present  '+this.attendPresence.toString()+'%'],
            datasets: [
                {
                    data: [100-this.attendPresence,this.attendPresence],
                    backgroundColor: [ documentStyle.getPropertyValue('--red-500'), documentStyle.getPropertyValue('--green-500')],
                    hoverBackgroundColor: [ documentStyle.getPropertyValue('--red-400'), documentStyle.getPropertyValue('--green-400')]
                }
            ]
        };
      
      
        this.options = {
            cutout: '60%',
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            }
        };
        

        }
      );

    

     

    })
    
    
  }

 
  ngDoCheck(): void {


  }

 





  
}
