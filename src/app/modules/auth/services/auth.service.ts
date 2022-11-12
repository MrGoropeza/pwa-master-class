import { Injectable } from '@angular/core';
import { GoogleAuthProvider, UserInfo } from '@angular/fire/auth';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private auth: AngularFireAuth
  ) { }

  checkAuth(): Observable<UserInfo | null>{
    return this.auth.authState;
  }

  async signInWithGoogle(){
    const provider = new GoogleAuthProvider();
    this.auth.signInWithRedirect(provider);

    const res = await this.auth.getRedirectResult();

    return (await this.auth.getRedirectResult()).user;
  }

  async signOut(){
    await this.auth.signOut();
  }
}
