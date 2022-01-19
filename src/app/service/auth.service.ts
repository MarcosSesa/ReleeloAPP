import { environment } from './../../environments/environment.prod';
import { Injectable } from "@angular/core";
import { ApiError, Session, SupabaseClient, User, UserCredentials } from '@supabase/supabase-js';
import { BehaviorSubject, Observable } from 'rxjs';


type SupabaseResponse = User | Session |ApiError | null;
@Injectable({ providedIn: 'root'})



export class AuthService{

    private supabase: SupabaseClient;
    private user = new BehaviorSubject<User | null>(null);

constructor(){
    this.supabase = environment.SupabaseClient;
}



async signIn(credentials: UserCredentials): Promise<SupabaseResponse>{
    try{
        const {user, session, error} = await this.supabase.auth.signIn(credentials);
        this.setuser();
        return error ? error : user;
    }catch (error) {
        console.log(error);
        return error as ApiError;
    }
    
}

async signUp(credentials: UserCredentials): Promise<SupabaseResponse>{
    try{
        const {user, session, error} = await this.supabase.auth.signUp(credentials);
        this.setuser();
        return error ? error : user;
    }catch (error) {
        console.log(error);
        return error as ApiError;
    } 
    
}
signOut() : Promise<{error : ApiError | null}>{
    this.user.next(null);
    return this.supabase.auth.signOut();
}

getuser(): Observable <User | null> {
    return this.user.asObservable();
}
setuser(): void {
    const session = localStorage.getItem(environment.STORAGE_KEY) as unknown as User;
    this.user.next(session);
}



}
