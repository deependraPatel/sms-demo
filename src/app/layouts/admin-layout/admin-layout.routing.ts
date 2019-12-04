import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { SendSmsComponent } from '../../pages/send-sms/send-sms.component';
import { ContactsComponent } from '../../pages/contacts/contacts.component';
import { TemplatesComponent } from '../../pages/templates/templates.component';
import { ReportsComponent } from '../../pages/reports/reports.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';


export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',        component: DashboardComponent },
    { path: 'send-sms',         component: SendSmsComponent },
    { path: 'contact-list',     component: ContactsComponent },
    { path: 'templates',        component: TemplatesComponent},
    { path: 'report',           component: ReportsComponent },
    { path: 'user-profile',     component: UserProfileComponent },
    { path: '**',               redirectTo: 'dashboard', pathMatch: 'full'}
];
