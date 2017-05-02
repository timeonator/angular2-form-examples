import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template:  `
    <nav>
      <a routerLink="/profile">Profile</a>
      <a routerLink="/account">Account</a>
    </nav>

    <router-outlet></router-outlet>
    <!-- Route components are added by router here -->
  `
})
export class AppComponent  { name = 'Angulars-Form-Examples'; }
