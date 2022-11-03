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

  async getActivities() {
    const activities = await getDocs(collection(this.firestore, "activities"));
    return activities;
  }

  async getOneDayActivities(day: string) {
    let date = new Date(day);
    let dayActivities = [];
    const activities = await this.getActivities();
    if (activities) {
      activities.forEach(res => {
        const activity = res.data();
        if (activity.day == date) dayActivities.push(activity);
      });
    }
    return dayActivities;
  }

  async getHistories() {
    const activities = await getDocs(collection(this.firestore, "histories"));
    return activities;
  }

  async getAdherentHistories(adherentID: string) {
    let adherentHistories = [];
    const histories = await this.getHistories();
    if (histories) {
      histories.forEach(res => {
        const history = res.data();
        if (history.adherentID == adherentID) adherentHistories.push(history);
      });
    }
    return adherentHistories;
  }

  async getAdherents() {
    const adherentsList = await getDocs(collection(this.firestore, `adherents`));
    return adherentsList;
  }

  async getAdherentsFromParentID(parentID: string) {
    let parentAdherents = [];
    const adherentsList = await this.getAdherents();
    if (adherentsList) {
      adherentsList.forEach(res => {
        const adherent = res.data();
        if (adherent.isParent == false && adherent.parentID == parentID)
          parentAdherents.push(adherent);
      });
    }
    return parentAdherents;
  }


  async getFormatedHistoryForAdherents(adherentsList: any[]) {
    let adherentsNewHist = [];
    adherentsList.forEach(res => {
      const currentAdherentHistories = {adherent: res, histories: this.getAdherentHistories(res.adherentID)};
      adherentsNewHist.push(currentAdherentHistories);
    })
  }

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
