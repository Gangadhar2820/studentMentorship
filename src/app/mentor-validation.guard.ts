import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { MentorListService } from './mentor-list.service';



@Injectable({
  providedIn: 'root'
})
export class MentorValidationGuard implements CanActivate {

  username :String ; 
  password : String ;

  constructor(private mentorListService :MentorListService){}

  sentMentorDetails(username:String , password:String){

    this.username = username ;
    this.password = password ;  
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot ): boolean {


    return  this.mentorListService.mentorExists(this.username , this.password);

  }

}
 