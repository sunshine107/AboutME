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
    return this.http.get('/api/menuItems').pipe(map((res)=>{
      return res.json();}));
  }
  getAllMasterInfo(){
    return this.http.get('/api/masterInfo').pipe(map((res)=>{
      return res.json();}));
  }
  getAllAboutMe(){
    return this.http.get('/api/aboutMe').pipe(map((res)=>{
      return res.json();}));
  }
  getAllGraduate(){
    return this.http.get('api/graduate').pipe(map((res)=>{
      return res.json();}));
  }
  getAllMyProject(){
    return this.http.get('/api/myProject').pipe(map((res)=>{
      return res.json();}));
  }
  getAllMyContact(){
    return this.http.get('/api/myContact').pipe(map((res)=>{
      return res.json();}));
  }
  getAllMySkills(){
    return this.http.get('/api/skill').pipe(map((res)=>{
      return res.json();}));
  }
}

