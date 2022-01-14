import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  AuthForm!:FormGroup;

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
