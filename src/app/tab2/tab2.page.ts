import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { DateParserService } from '../services/date-parser.service';
import { NavigationService } from '../services/navigation.service';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  data = [];
  tmp = [
    {
      adherent: {
        adherentID: 1,
        name: 'FABIEN',
        parentID: 1
      },
      histories: [
        {
          id: 1,
          day: '02/11/2022',
          arrivedHour: '12h45',
          leavingHour: '13h30'
        },
        {
          id: 2,
          day: '20/10/2022',
          arrivedHour: '12h50',
          leavingHour: '14h00'
        },
        {
          id: 3,
          day: '01/11/2022',
          arrivedHour: '12h47',
          leavingHour: '14h20'
        }
      ]
    },
    {
      adherent: {
        adherentID: 2,
        name: 'RAOUL',
        parentID: 1
      },
      histories: [
        {
          id: 1,
          day: '02/11/2022',
          arrivedHour: '12h45',
          leavingHour: '13h30'
        },
        {
          id: 2,
          day: '20/10/2022',
          arrivedHour: '12h50',
          leavingHour: '14h00'
        },
        {
          id: 3,
          day: '01/11/2022',
          arrivedHour: '12h47',
          leavingHour: '14h20'
        }
      ]
    },
    
  ];
  constructor(
    private authService: AuthService,
    private navigationService: NavigationService,
    private dateParserService: DateParserService,
    private storageService: StorageService
  ) {
    this.getHistories();
  }

  getHistories() {
    this.data = this.tmp;
    return this.data;
  }

  logout() {
    this.authService.logout();
    this.navigationService.goto('/login');
  }

  toLocalDate(day: string) {
    return day;
  }
}
