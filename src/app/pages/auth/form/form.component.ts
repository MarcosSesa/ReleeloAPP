import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
 
export interface FormOption{
  id: string,
  option: string;
}
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  AuthForm!:FormGroup;
  @Input() options!: FormOption

  constructor(
    private FormBuilder:FormBuilder
  ) { 

    this.AuthForm = this.FormBuilder.group({
      email: ['',Validators.required],
      password: ['',Validators.required]
    })

  }

  ngOnInit(): void {
  }

  onSubmit(){}


}
