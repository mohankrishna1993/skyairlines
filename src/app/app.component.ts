import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'altraPRA';
  @ViewChild('sidenav') sidenav!: MatSidenav;
  isSidenavOpen = true;
  iconOnly = false;

  toggleSidenav() {
    this.iconOnly = !this.iconOnly;
    this.isSidenavOpen = !this.isSidenavOpen;
  }
}
