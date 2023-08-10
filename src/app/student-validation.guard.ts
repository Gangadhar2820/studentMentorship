import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { StudentListService } from './student-list.service';


@Injectable({
  providedIn: 'root'
})
export class StudentValidationGuard implements CanActivate {

  hallticketno : String ='';
  dateofbirth : String ='';

  constructor(private studentListService : StudentListService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    return this.studentListService.studentExists(this.hallticketno,this.dateofbirth);

      
  }
  
  setStudentDetails(hallticketno:String,dateofbirth:String){

    this.hallticketno = hallticketno;
    this.dateofbirth = dateofbirth;
    

  }
}
