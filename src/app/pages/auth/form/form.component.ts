import { User, ApiError } from '@supabase/supabase-js';
import { AuthService } from './../../../service/auth.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserCredentials } from '@supabase/gotrue-js';
import { promises } from 'dns';
import { Route, Router } from '@angular/router';
 
export interface FormOption{
  id: string,
  option: string;
}

export interface UserResponse extends User, ApiError {}
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  AuthForm!:FormGroup;
  @Input() options!: FormOption

  constructor(
    private FormBuilder:FormBuilder,
    private AuthService: AuthService,
    private Router: Router,
  ) { 

    this.AuthForm = this.FormBuilder.group({
      email: ['',Validators.required],
      password: ['',Validators.required]
    })

  }

  ngOnInit(): void {
  }

  async onSubmit(): Promise<any>{
    const creadentials : UserCredentials = this.AuthForm.value; {}
    let ActionCalled;

    if(this.options.id == "signIn"){
     ActionCalled = this.AuthService.signIn(creadentials);
    }else{
      ActionCalled = this.AuthService.signUp(creadentials);
    }

    try {
      const result = await ActionCalled as UserResponse;
      if(result.email){
        this.Router.navigate(['/home']);
      }

    } catch (error) {

    }
  }


}
