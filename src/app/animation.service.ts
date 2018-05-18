import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimationService {

  constructor(public name:string, public status = 'inactive') { }

  toggleState(){
    this.status = this.status === 'active'?  'inactive': 'active';
  }
}
