import { Component, OnInit } from '@angular/core';
import { FormOption } from 'src/app/pages/auth/form/form.component';

@Component({
  selector: 'app-sign-in',
  template: '<app-form [options]="options"></app-form>',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
 
  options:FormOption = {
    option: 'signIn'
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
