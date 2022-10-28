import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { Day, Time } from '../models/planing.model';

const options: any = { weekday: 'short', month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric' };

@Injectable({
  providedIn: 'root',
})
export class DateParserService {

  public currentMonth: string;
  public months = new Array();
  public currentYear: number;
  public selectedYear: number;

  public daysFr = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];
  public daysEn = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  public monthsFr = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Aôut', 'Sep', 'Oct', 'Nov', 'Déc'];
  public monthsEn = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  constructor(
  ) {
    this.setCurrentDate('fr');
  }

  public adaptDate(lang: string): any {
    if (lang === 'en') {
      return this.daysEn;
    } else {
      return this.daysFr;
    }
  }

  public adaptMonth(lang: string): any {
    if (lang === 'en') {
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
    this.currentYear = new Date().getFullYear();
    this.selectedYear = this.currentYear;
    if (lang === 'en') {
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
    return new DatePipe('fr-FR').transform(dateString, 'dd/MM/yyyy hh:mm');
  }

  public getDates(lang: string): Array<Day> {
    let newDate: Day;
    const tmpDate = new Date();
    let dates = new Array<Day>();
    let pairMonth = [0, 2, 4, 6, 7, 9, 11];
    let impairMonth = [3, 5, 8, 10];
    this.setCurrentDate(lang);
    if (lang === 'en') {
      newDate = {
        id: "1",
        monthDay: tmpDate.getDate(),
        weekDay: this.daysEn[tmpDate.getDay()],
        availableTimes: new Array<Time>(),
        times: new Array<Time>(),
        occupedTimes: Array<Time>()
      }
    }
    else {
      newDate = {
        id: "1",
        monthDay: tmpDate.getDate(),
        weekDay: this.daysFr[tmpDate.getDay()],
        availableTimes: new Array<Time>(),
        times: new Array<Time>(),
        occupedTimes: Array<Time>()
      }
    }
    dates.push(newDate);
    for (let i = 0; i < 10; i++) {
      if (tmpDate.getMonth() % 2 !== 0) {
        pairMonth.forEach(month => {
          if (tmpDate.getMonth() === month) {
            if (tmpDate.getDate() === 31) {
              tmpDate.setDate(1);
              if (tmpDate.getMonth() === 11) {
                tmpDate.setMonth(0);
                tmpDate.setFullYear(tmpDate.getFullYear() + 1);
              }
              else {
                tmpDate.setMonth(tmpDate.getMonth() + 1);
              }
            }
            else {
              tmpDate.setDate(tmpDate.getDate() + 1);
            }
          }
        });
      } 
      else {
        if (tmpDate.getMonth() === 1) {
          if (tmpDate.getFullYear() % 4 === 0) {
            if (tmpDate.getDate() === 29) {
              tmpDate.setDate(1);
              tmpDate.setMonth(tmpDate.getMonth() + 1);
            } else {
              tmpDate.setDate(tmpDate.getDate() + 1);
            }
          } else {
            if (tmpDate.getDate() === 28) {
              tmpDate.setDate(1);
              tmpDate.setMonth(tmpDate.getMonth() + 1);
            } else {
              tmpDate.setDate(tmpDate.getDate() + 1);
            }
          }
        } else {
          impairMonth.forEach(month => {
            if (tmpDate.getMonth() === month) {
              if (tmpDate.getDate() === 30) {
                tmpDate.setDate(1);
                tmpDate.setMonth(tmpDate.getMonth() + 1);
              } else {
                tmpDate.setDate(tmpDate.getDate() + 1);
              }
            }
          });
        }
      }
      if (lang === 'en') {
        newDate = {
          id: (i+2).toString(),
          monthDay: tmpDate.getDate(),
          weekDay: this.daysEn[tmpDate.getDay()],
          availableTimes: new Array<Time>(),
          times: new Array<Time>(),
          occupedTimes: Array<Time>()
        }
      }
      else {
        newDate = {
          id: (i+2).toString(),
          monthDay: tmpDate.getDate(),
          weekDay: this.daysFr[tmpDate.getDay()],
          availableTimes: new Array<Time>(),
          times: new Array<Time>(),
          occupedTimes: Array<Time>()
        }
      }
      dates.push(newDate);
    }
    return dates;
  }
}
