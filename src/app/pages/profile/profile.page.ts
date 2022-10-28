import { DarkService } from './../../services/dark.service';
import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  name = "Elon Musk";
  constructor(
    // public darkService: DarkService,
    private renderer: Renderer2,
  ) { }

  ngOnInit() { }

  // public changeThemeMode(event): void {
  //   if (event.detail.checked) {
  //     this.renderer.setAttribute(document.body, 'color-theme', 'dark');
  //     this.darkService.isDark = true;
  //     this.darkService.storeUserLocalThemeMode(true);
  //   } 
  //   else {
  //       this.renderer.setAttribute(document.body, 'color-theme', 'light');
  //       this.darkService.isDark = false;
  //       this.darkService.storeUserLocalThemeMode(false);
  //   }
  //   if(event) {
       
  //   }
  //   else {
  //       if (this.darkService.isDark === true) {
  //           this.renderer.setAttribute(document.body, 'color-theme', 'dark');
  //       } else {
  //           this.renderer.setAttribute(document.body, 'color-theme', 'light');
  //       }
  //   }

  //   console.log(this.darkService.getUserLocalThemeMode());
  // }

}
