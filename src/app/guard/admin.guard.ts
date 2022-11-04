import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { User } from '../models/user';
import { AuthService } from '../services/auth.service';
import { StorageService } from '../services/storage.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanLoad {

  constructor(
    private router: Router,
    private authService: AuthService,
    private storageService: StorageService
    ) { }

  canLoad() {
    let user: User;
    this.storageService.getUserByUid(this.authService.getUid()).then(res => {
        user = res.data() as User;
        console.log('user');
    })
    .catch (err => {
        console.log(err);
    });
    if (user && user.getIsAdmin())
        return true;
    this.router.navigate(['']);
    return false;

  }
}