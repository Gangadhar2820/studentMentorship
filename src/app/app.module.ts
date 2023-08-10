import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { HeaderComponent } from './header/header.component';
import { PanelModule } from 'primeng/panel';
import { LoginComponent } from './login/login.component';
import { CardModule } from 'primeng/card';
import { SplitterModule } from 'primeng/splitter';
import { DividerModule } from 'primeng/divider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { RippleModule } from 'primeng/ripple';
import { DialogModule } from 'primeng/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { FocusTrapModule } from 'primeng/focustrap';
import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { InputMaskModule } from 'primeng/inputmask';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { StudentInterfaceComponent } from './student-interface/student-interface.component';
import { MentorInterfaceComponent } from './mentor-interface/mentor-interface.component';
import { HomeInterfaceComponent } from './home-interface/home-interface.component';
import { AnimateModule } from 'primeng/animate';
import { SidebarModule } from 'primeng/sidebar';
import { AvatarModule } from 'primeng/avatar';
import { ListboxModule } from 'primeng/listbox';
import { StudentmyprofileComponent } from './studentmyprofile/studentmyprofile.component';
import { StudentacademicyearComponent } from './studentacademicyear/studentacademicyear.component';
import { StudentmyinstitutionComponent } from './studentmyinstitution/studentmyinstitution.component';
import { StudentmymentorComponent } from './studentmymentor/studentmymentor.component';
import { TabViewModule } from 'primeng/tabview';
import { ChartModule } from 'primeng/chart';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { StudentacademicService } from './studentacademic.service';
import { MentorexternalsComponent } from './mentorexternals/mentorexternals.component';
import { MentorinternalsComponent } from './mentorinternals/mentorinternals.component';
import { MentorattendanceComponent } from './mentorattendance/mentorattendance.component';
import { MentormyprofileComponent } from './mentormyprofile/mentormyprofile.component';
import { MentormyinstitutionComponent } from './mentormyinstitution/mentormyinstitution.component';
import { MentormystudentsComponent } from './mentormystudents/mentormystudents.component';
import { DropdownModule } from 'primeng/dropdown';
import { MentorexamdataService } from './mentorexamdata.service';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  
       LoginComponent,
       PagenotfoundComponent,
       StudentInterfaceComponent,
       MentorInterfaceComponent,
       HomeInterfaceComponent,
       StudentmyprofileComponent,
       StudentacademicyearComponent,
       StudentmyinstitutionComponent,
       StudentmymentorComponent,
       MentorexternalsComponent,
       MentorinternalsComponent,
       MentorattendanceComponent,
       MentormyprofileComponent,
       MentormyinstitutionComponent,
       MentormystudentsComponent,
    
   
  ],
  imports: [
    AnimateModule,HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    ButtonModule,
    PanelModule,
    CardModule,
    SplitterModule,
    DividerModule,
    BrowserAnimationsModule,
    RippleModule,
    DialogModule,
    ReactiveFormsModule,
    FormsModule,
    InputTextModule,
    PasswordModule,
    FocusTrapModule,
    FileUploadModule,TableModule,
    ToastModule,
    InputMaskModule,ScrollPanelModule,
    SidebarModule,
    AvatarModule,DropdownModule,
    ListboxModule,TabViewModule,ChartModule
   
  ],
  providers: [ PrimeNGConfig,MessageService,StudentacademicService,MentorexamdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
