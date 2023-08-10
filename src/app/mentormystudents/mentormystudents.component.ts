import { Component } from '@angular/core';
import {OnInit} from '@angular/core';

@Component({
  selector: 'app-mentormystudents',
  templateUrl: './mentormystudents.component.html',
  styleUrls: ['./mentormystudents.component.css']
})
export class MentormystudentsComponent implements OnInit{

  studentcount:Number[];

  constructor(){}


  ngOnInit(): void {

    this.studentcount = [1,2,3,4,5];


    
  }



}
