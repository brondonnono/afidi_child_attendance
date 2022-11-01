import { Injectable } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(
    private router: Router,
  ) { }

  goto(url: string) {
    this.router.navigate([url]);
  }

  public gotoWithUrl(url: string): void {
    this.router.navigateByUrl(url);
  }

  public goToWithId(url: string, id: number, uid?: number): void {
    const extra: NavigationExtras = {
      queryParams: {
        id: id,
        uid: uid ? uid : null
      }
    };
    this.router.navigate([url], extra);
  }

  public goToWithData(url: string, id: number, uid?: string, data?: any): void {
    const extra: NavigationExtras = {
      queryParams: {
        id: id,
        uid: uid ? uid : null,
        data: data ? JSON.stringify(data) : null,
      }
    };
    this.router.navigate([url], extra);
  }

  public gotoChatWithDiscussionData(url: string, data: any, uid?: string): void {
    const extra: NavigationExtras = {
      queryParams: {
        uid: uid ? uid : null,
        data: data ? data : null
      }
    };
    this.router.navigate([url], extra);
  }

  public goToWithParams(url: string, params: any, userId: string): void {
    const extra: NavigationExtras = {
      queryParams: {
        param: params,
        uid: userId
      }
    };
    this.router.navigate([url], extra);
  }
}
