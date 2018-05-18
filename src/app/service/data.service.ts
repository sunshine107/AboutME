import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:Http){}
  getAllMenuItems(){
    return this.http.get('http://localhost:8888/api/menuItems').pipe(map((res)=>{
      return res.json();}));
  }
  getAllMasterInfo(){
    return this.http.get('http://localhost:8888/api/masterInfo').pipe(map((res)=>{
      return res.json();}));
  }
  getAllAboutMe(){
    return this.http.get('http://localhost:8888/api/aboutMe').pipe(map((res)=>{
      return res.json();}));
  }
  getAllGraduate(){
    return this.http.get('http://localhost:8888/api/graduate').pipe(map((res)=>{
      return res.json();}));
  }
  getAllMyProject(){
    return this.http.get('http://localhost:8888/api/myProject').pipe(map((res)=>{
      return res.json();}));
  }
  getAllMyContact(){
    return this.http.get('http://localhost:8888/api/myContact').pipe(map((res)=>{
      return res.json();}));
  }
  getAllMySkills(){
    return this.http.get('http://localhost:8888/api/skill').pipe(map((res)=>{
      return res.json();}));
  }
}

