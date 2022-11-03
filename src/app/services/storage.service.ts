import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { doc, getDocs, setDoc, serverTimestamp, Firestore, collection, deleteDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(
    private auth: Auth,
    private firestore: Firestore,
  ) { }

  async storeUserEmail(email) {
    console.log(email, '  email');
    try {
      const user = this.auth.currentUser;
      const userDocRef = doc(this.firestore, `users/${user.uid}`);
      await setDoc(userDocRef, {
        email,
        lastUpdate: serverTimestamp()
      });
      return true;
    } catch (e) {
      console.log(e);
      return null;
    }
  }

  getUid() {
    return this.auth.currentUser.uid;
  }

  // async getMenuItems() {
  //   const menus = await getDocs(collection(this.firestore, "main_menu"));
  //   return menus;
  // }

  // async getUserExperiences() {
  //   const user = this.auth.currentUser;
  //   const experiences = await getDocs(collection(this.firestore, `users/${user.uid}/experiences`));
  //   return experiences;
  // }

  // async getUserCompetences() {
  //   const user = this.auth.currentUser;
  //   const collectionRef = collection(this.firestore, 'users');
  //   console.log(collectionRef);
  //   const competences = await getDocs(collectionRef);
    
  //   const result = await getDocs(collection(this.firestore, `users/${user.uid}/competences`));
  //   return result;
  // }

  // async getUserFormations() {
  //   const user = this.auth.currentUser;
  //   const formations = await getDocs(collection(this.firestore, `users/${user.uid}/formations`));
  //   return formations;
  // }

  // async getUserCertifications() {
  //   const user = this.auth.currentUser;
  //   const certifications = await getDocs(collection(this.firestore, `users/${user.uid}/certifications`));
  //   return certifications;
  // }

  async deleteData(docId, collection) {
    return await deleteDoc(doc(this.firestore, collection, docId));
  }
}
