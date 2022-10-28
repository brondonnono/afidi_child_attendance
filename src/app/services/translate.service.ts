import { StorageService } from './storage.service';
import { Injectable } from '@angular/core';
import { Translation } from '../configs/translate';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {

  constructor(
    private storageService: StorageService
  ) { }

  public getTranslation(language: string): any {
    this.storageService.getLanguage().then(
      (res) => {},
      err => console.log(err)
    );
    if (language == 'en') {
      return Translation.english;
    } else {
      return Translation.french;
    }
  }
}
