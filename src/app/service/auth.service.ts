import { environment } from './../../environments/environment.prod';
import { Injectable } from "@angular/core";
import { createClient, SupabaseClient, UserCredentials } from '@supabase/supabase-js';
import { Observable } from 'rxjs';



@Injectable({ providedIn: 'root'})



export class AuthService{

    private supabase: SupabaseClient;

constructor(){
    this.supabase = environment.SupabaseClient;
}

async signIn(credentials: UserCredentials): Promise<any>{
    const {user, session, error} = await this.supabase.auth.signIn(credentials);
}




}
