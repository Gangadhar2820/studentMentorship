import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeInterfaceComponent } from './home-interface/home-interface.component';
import { StudentInterfaceComponent } from './student-interface/student-interface.component';
import { MentorInterfaceComponent } from './mentor-interface/mentor-interface.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

import { MentorValidationGuard } from './mentor-validation.guard';
import { StudentValidationGuard } from './student-validation.guard';
import { StudentmyprofileComponent } from './studentmyprofile/studentmyprofile.component';
import { StudentacademicyearComponent } from './studentacademicyear/studentacademicyear.component';
import { StudentmyinstitutionComponent } from './studentmyinstitution/studentmyinstitution.component';
import { StudentmymentorComponent } from './studentmymentor/studentmymentor.component';
import { MentormyprofileComponent } from './mentormyprofile/mentormyprofile.component';
import { MentormyinstitutionComponent } from './mentormyinstitution/mentormyinstitution.component';
import { MentormystudentsComponent } from './mentormystudents/mentormystudents.component';
import { MentorexternalsComponent } from './mentorexternals/mentorexternals.component';
import { MentorinternalsComponent } from './mentorinternals/mentorinternals.component';
import { MentorattendanceComponent } from './mentorattendance/mentorattendance.component';

const routes: Routes = [

  // { path:'' ,component:StudentInterfaceComponent ,children:[
  //   { path:'profile',component:StudentmyprofileComponent,pathMatch:'full'},
  //   { path:'year/:no',component:StudentacademicyearComponent,pathMatch:'full'},
  //   {path:'institution',component:StudentmyinstitutionComponent,pathMatch:'full'},
  //   {path:'mentor',component:StudentmymentorComponent,pathMatch:'full'}
  // ]},
  { path:'' , component:MentorInterfaceComponent,children:[
    {path:'profile',component:MentormyprofileComponent,pathMatch:'full'},
    {path:'institution',component:MentormyinstitutionComponent,pathMatch:'full'},
    {path:'students',component:MentormystudentsComponent,pathMatch:'full'},
    {path:'externals',component:MentorexternalsComponent,pathMatch:'full'},
    {path:'internals',component:MentorinternalsComponent,pathMatch:'full'},
    {path:'attendance',component:MentorattendanceComponent,pathMatch:'full'}
  ]},

  { path:'' ,redirectTo:'/home', pathMatch:'full' },
  { path:'home',component:HomeInterfaceComponent,children:[
    { path:'login' , component:LoginComponent }
  ] },
  
  { path:'student/:hallticketno' ,component:StudentInterfaceComponent ,canActivate:[StudentValidationGuard],children:[
    { path:'profile',component:StudentmyprofileComponent,pathMatch:'full'},
    { path:'year/:no',component:StudentacademicyearComponent,pathMatch:'full'},
    {path:'institution',component:StudentmyinstitutionComponent,pathMatch:'full'},
    {path:'mentor',component:StudentmymentorComponent,pathMatch:'full'}
  ]},
  { path:'mentor/:mentorId' , component:MentorInterfaceComponent , canActivate:[MentorValidationGuard],children:[
    {path:'profile',component:MentormyprofileComponent,pathMatch:'full'},
    {path:'institution',component:MentormyinstitutionComponent,pathMatch:'full'},
    {path:'students',component:MentormystudentsComponent,pathMatch:'full'},
    {path:'externals',component:MentorexternalsComponent,pathMatch:'full'},
    {path:'internals',component:MentorinternalsComponent,pathMatch:'full'},
    {path:'attendance',component:MentorattendanceComponent,pathMatch:'full'}
  ]},
  { path:'**',component:PagenotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
