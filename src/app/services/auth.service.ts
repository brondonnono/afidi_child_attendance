import { Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  updateEmail
} from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public authErrorsCodes = [
    {
      type: 'network',
      code: 'auth/network-request-failed'
    },
  ];
  constructor(
    private auth: Auth
  ) { }


  async login({ email, password }) {
    try {
      const user = await signInWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      return user;
    } catch (e) {
      return e.code;
    }
  }

  async register({ email, password }) {
    console.log(email);
    try {
      const user = await createUserWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      return user;
    } catch (e) {
      return e.code;
    }
  }

  async updateEmail(newEmail: string) {
    return updateEmail(this.auth.currentUser, newEmail);
  }

  logout() {
    return signOut(this.auth);
  }

  checkUserType() { }

  deleteUser() {
    return this.auth.currentUser.delete();
  }

  async resetPasswordTel(email: string) {
    return sendPasswordResetEmail(this.auth, email);
  }

  isconnected() {
    return (this.auth.currentUser != null);
  }

  getUid() {
    if (this.auth.currentUser) return this.auth.currentUser.uid;
  }

}
