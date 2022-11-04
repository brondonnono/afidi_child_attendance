import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';

const options: any = { weekday: 'short', month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric' };

@Injectable({
  providedIn: 'root',
})
export class DateParserService {

  public currentMonth: string;
  public months = new Array();
  public currentYear: number 
  public selectedYear: number = new Date().getFullYear();

  public daysFr = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
  public daysEn = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  public monthsFr = ['Janvier', 'Févier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aôut', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
  public monthsEn = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  constructor(
  ) { }

  public adaptDate(lang: string): any {
    if (lang == 'en') {
      return this.daysEn;
    } else {
      return this.daysFr;
    }
  }

  public adaptMonth(lang: string): any {
    this.months = new Array();
    if (lang == 'en') {
      this.monthsEn.forEach(month => {
        this.months.push(month);
      });
    } else {
      this.monthsFr.forEach(month => {
        this.months.push(month);
      });
    }
    if (this.selectedYear === this.currentYear) {
      this.months.splice(0, new Date().getMonth());
    }
    return this.months;
  }

  public getGroupOfYears(): any {
    const years = new Array();
    years.push(this.currentYear);
    for (let i = 1; i < 11; i++) {
      years.push(this.currentYear + i);
    }
    return years;
  }

  public setCurrentDate(lang: string): void {
    this.months = new Array(); 
    this.currentYear = new Date().getFullYear();
    if (lang == 'en') {
      this.currentMonth = this.monthsEn[new Date().getMonth()];
    } else {
      this.currentMonth = this.monthsFr[new Date().getMonth()];
    }
    this.adaptMonth(lang);
  }

  public parseToLocalFr(date: Date): string {
    return date.toLocaleDateString('fr-FR', options);
  }

  public getFormattedDate(dateString: string): string {
    return new DatePipe('fr-FR').transform(dateString, 'dd/MM/yyyy');
  }

  public getFormattedDateAndTime(dateString: string): string {
    return new DatePipe('fr-FR').transform(dateString, 'dd/MM/yyyy hh:mm');
  }
}
