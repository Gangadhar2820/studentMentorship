import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-mentorinternals',
  templateUrl: './mentorinternals.component.html',
  styleUrls: ['./mentorinternals.component.css']
})
export class MentorinternalsComponent implements OnInit { 

  constructor(){}

  years;
  selectedYear;
  semesters;
  selectedSemester;
  rollno;
  selectedRollno;

  verifyDetail =[{FIRSTNAME:'',LASTNAME:''}];
  
  ngOnInit(): void {
    
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

  
}
