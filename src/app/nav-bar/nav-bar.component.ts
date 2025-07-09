import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-nav-bar',
  imports: [
    MenubarModule,
    ButtonModule,
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

     items: MenuItem[] = [
    {
      label: 'Home',
      icon: 'pi pi-home',
      routerLink: '/',
    },
    {
      label: 'Products',
      icon: 'pi pi-shopping-cart',
      routerLink: '/products',
    },
    {
      label: 'Contact',
      icon: 'pi pi-envelope',
      routerLink: '/contact',
    },
  ];
}
