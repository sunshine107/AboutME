import { Component } from '@angular/core';
import { trigger, state, style, animate, transition} from "@angular/animations";
import { DataService } from "./service/data.service";
import { Menu } from "./classes/menu";
import { Info } from "./classes/info";
import { Aboutme } from "./classes/aboutme";
import { Graduate } from "./classes/graduate";
import { Skill } from "./classes/skill";
import { Mycontact } from "./classes/mycontact";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('navState', [
      state('inactive', style({
        backgroundColor: '#eee',
        transform: 'scale(1)'
      })),
      state('active',   style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1.1)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
})
export class AppComponent {
  title = 'app';

  navbarItems:Menu[] = [];
  masterInfo:Info;
  aboutMe:Aboutme;
  graduate:Graduate[] = [];
  skill:Menu[] = [];
  myContact:Mycontact[] = [];
  mycontact:Mycontact;
  temp:string="https://github.com/sunshine107/AboutME/blob/master/src/images/myFace.png?raw=true";

  projects:string[]=[];
  

  constructor(private dataService:DataService){}
  ngOnInit(){

      this.dataService.getAllMenuItems().subscribe((menuItems)=>{
        this.navbarItems = menuItems;
      })

      this.dataService.getAllMasterInfo().subscribe((masterInfo)=>{
        this.masterInfo = masterInfo;
        console.log(this.masterInfo);
      })

      this.dataService.getAllAboutMe().subscribe((aboutMe)=>{
        this.aboutMe = aboutMe;
        console.log(this.aboutMe);
      })

      this.dataService.getAllGraduate().subscribe((graduate)=>{
        this.graduate = graduate;
        console.log(this.graduate);
      })

      this.dataService.getmycontact().subscribe((mycontact)=>{
        this.mycontact = mycontact;
        console.log(this.mycontact);
      })

      this.dataService.getAllMySkills().subscribe((skill)=>{
        this.skill = skill;
        console.log(this.skill);
      })
      this.dataService.getAllProjects().subscribe((projects)=>{
        this.projects = projects;
        console.log(this.projects);
      })

    }
    getphotourl():string{
      return "url("+this.masterInfo.myphoto + ")";
    }
    
    selectedItem:string = "Home";
    selectItem(item:string):void{
      this.selectedItem = item;
    }

  mySkills:string[]=[
    "HTML5, CSS, AJAX, JavaScript, XML, JSON, JQuery, RxJS, BootStrap, Angular, ExpressJS, NodeJS, MongoDB."
  ]
  no:number[]=[1,2,3,4,5,6,7,8];
}

