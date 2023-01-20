import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {

  constructor(
    
    private service: SharedService
) { }

  login():void{
    this.service.createUser(eval).subscribe(res =>{
      //console.log(val)
    })
  }
}
