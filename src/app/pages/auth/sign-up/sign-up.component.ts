import { Component, OnInit } from '@angular/core';
import { FormOption } from 'src/app/pages/auth/form/form.component';

@Component({
  selector: 'app-sign-up',
  template: `<app-form [options]="options"></app-form>`,
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  options:FormOption = {
    id: "signUp",
    option: 'Registrarse'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
