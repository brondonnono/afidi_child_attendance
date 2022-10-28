import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class DarkService {

  public isDark = false;

  constructor(
    private storageService: StorageService
  ) { }

  public getUserLocalThemeMode(): boolean {
    this.storageService.getTheme().then(
      res => this.isDark = res,
      err => console.log(err)
    );
    return this.isDark;
  }

  public setUserLocalThemeMode(localTheme: boolean): void {
    this.isDark = localTheme;
  }

  public storeUserLocalThemeMode(isDark: boolean): void {
    this.storageService.setTheme(isDark).then(
      (res) => {
        if (res) console.log(res);
      },
      err => console.log(err)
    );
  }

}
