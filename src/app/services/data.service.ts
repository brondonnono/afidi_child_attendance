import { StorageService } from './storage.service';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public currentUser: User = null;

  public defaultUserAvatar = "assets/noavatar.png";

  public firstTime: boolean = true;

  constructor(
    private storageService: StorageService
  ) { }
  
  public storeUserLocalLanguage(lang: string): void {
    if (lang !== "") {
      this.storageService.setLanguage(lang).then(
        (res) => {
          if (res) console.log(res);
        },
        err => console.log(err)
      );
    }
  }

  public setUserLocalLanguage(lang: string): void {
    if (this.firstTime === false) {
      this.currentUser.language = lang;
    }
  }

  public getUserLocalLanguage(): string {
    this.storageService.getLanguage().then(
      (res) => {
        this.currentUser.language = res;
      },
      err => console.log(err)
    );
    return this.currentUser.language;
  }
}
