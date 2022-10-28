import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  public data: any = null;
  public isData: boolean = false;

  constructor(
    private storage: Storage,
  ) {
    this.initStorage();
  }

  public async initStorage() {
    const _storage = await this.storage.create();
    this.storage = _storage;
  }

  public setLanguage(lang: string): Promise<boolean> {
    return this.storage.set('user_language', lang);
  }

  public getLanguage(): Promise<string> {
    return this.storage.get('user_language');
  }

  public setTheme(isDark: boolean): Promise<boolean> {
    return this.storage.set('user_theme', isDark);
  }

  public getTheme(): Promise<boolean> {
    return this.storage.get('user_theme');
  }

  public setTutorial(didTurial: boolean): Promise<boolean> {
    return this.storage.set('did_tutorial', didTurial);
  }

  public getTutorial(): Promise<boolean> {
    return this.storage.get('did_tutorial');
  }
}