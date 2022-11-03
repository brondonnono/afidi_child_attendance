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
      title: 'Informatique',
      shortDescription: 'Cours d\'initiation a l\'informatique',
      beginTime: '10h00'
    },
    {
      title: 'Chinois',
      shortDescription: 'Apprentissage de la langue Chinoise',
      beginTime: '13h00'
    },
    {
      title: 'Anglais',
      shortDescription: 'Apprentissage de la langue Anglaise',
      beginTime: '14h20'
    },
    {
      title: 'Mathématiques',
      shortDescription: 'Cours de soutien en mathématiques',
      beginTime: '15h30'
    },
    {
      title: 'Musique',
      shortDescription: 'Initiation à la musique (à l\'instrument piano)',
      beginTime: '16h10'
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

  logout() {
    this.authService.logout();
    this.navigationService.goto('/login');
  }

}
