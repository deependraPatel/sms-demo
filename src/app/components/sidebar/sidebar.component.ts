import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/pages/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/pages/send-sms', title: 'Send SMS',  icon:'contact_mail', class: '' },
    { path: '/pages/contact-list', title: 'Contacts',  icon:'import_contacts', class: '' },
    { path: '/pages/templates', title: 'Manage Templates',  icon:'text_format', class: '' },
    { path: '/pages/report', title: 'Report',  icon:'report', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
