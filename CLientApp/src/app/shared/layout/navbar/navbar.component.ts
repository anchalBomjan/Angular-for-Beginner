import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  items:MenuItem[]=[]


    ngOnInit() {
    this.items = [
      { label: 'Home', icon: 'pi pi-home', routerLink: '/' },
      { label: 'Student', icon: 'pi pi-info-circle', routerLink: '/home/app-home/students/list' },
      { label: 'Teacher', icon: 'pi pi-briefcase', routerLink: '/services' },
      {
        label: 'More',
        icon: 'pi pi-bars',
        items: [
          { label: 'Available Course', icon: 'pi pi-user', routerLink: '/profile' },
          { label: 'Settings', icon: 'pi pi-cog', routerLink: '/settings' }
        ]
      }
    ];
  }
}
