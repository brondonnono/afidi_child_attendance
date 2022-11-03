import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { NavigationService } from '../services/navigation.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  activities = [];
  tmp = [
    {
      id: 1,
      title: 'Informatique',
      shortDescription: 'Cours d\'initiation a l\'informatique',
      beginTime: '10h00',
      endTime: '12h00',
      MemberId: 'member1a'
    },
    {
      id: 2,
      title: 'Chinois',
      shortDescription: 'Apprentissage de la langue Chinoise',
      beginTime: '13h00',
      endTime: '14h00',
      MemberId: 'member1a'
    },
    {
      id: 3,
      title: 'Anglais',
      shortDescription: 'Apprentissage de la langue Anglaise',
      beginTime: '14h20',
      endTime: '15h20',
      MemberId: 'member1a'
    },
    {
      id: 4,
      title: 'Mathématiques',
      shortDescription: 'Cours de soutien en mathématiques',
      beginTime: '15h30',
      endTime: '16h00',
      MemberId: 'member1a'
    },
    {
      id: 5,
      title: 'Musique',
      shortDescription: 'Initiation à la musique (à l\'instrument piano)',
      beginTime: '16h10',
      endTime: '17h10',
      MemberId: 'member1a'
    }
  ];

  constructor(
    private authService: AuthService,
    private navigationService: NavigationService
  ) {}

  getActivities() {
    this.activities = this.tmp;
    return this.activities;
  }

  getTodayActivities() {
    return this.getActivities();
  }

  getTomorrowActivities() {   // how to generate tomorrow date with today date in typescript ?
    return this.getActivities();
  }

  logout() {
    this.authService.logout();
    this.navigationService.goto('/login');
  }

}
