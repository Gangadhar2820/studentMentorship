import { Component, OnInit } from '@angular/core';
import { MentorListService } from '../mentor-list.service'; 
import { ActivatedRoute } from '@angular/router';
import { mentor } from '../mentor';

@Component({
  selector: 'app-mentor-interface',
  templateUrl: './mentor-interface.component.html',
  styleUrls: ['./mentor-interface.component.css']
})
export class MentorInterfaceComponent implements OnInit {
  
  loggedMentor : mentor = null;
  loggedMentorId : String;

  dropdownVisible = false;

  constructor(private activatedRoute : ActivatedRoute,private mentorListService : MentorListService){}

  ngOnInit(): void {

     this.activatedRoute.paramMap.subscribe((data)=>{

      this.loggedMentorId = data.get('mentorId')


     })

    
  }

}
