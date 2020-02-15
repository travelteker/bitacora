import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

import { IUser } from '../models/user.interface';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public userData: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth) {
    this.userData = afAuth.authState;
  }

  /**
   * Check access for user
   * @param user Object who identify at the user
   */
  loginByEamil(user: IUser): Promise<firebase.auth.UserCredential> {
    // Destructuring, extract properties from object
    const { email, password } = user;
    this.afAuth.authState.subscribe(
      res => console.log('AUTHSTATE >>>>>>>>>>>>> ', res)
    );
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  /**
   * Close session user
   */
  logout(): void {
    const exit = this.afAuth.auth.signOut();
    console.log('Exit session >>>>>>>>>>>>>>>> ', exit);
  }
}
