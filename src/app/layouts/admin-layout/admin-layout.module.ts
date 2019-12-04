import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DataTablesModule } from 'angular-datatables';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { SendSmsComponent } from '../../pages/send-sms/send-sms.component';
import { ContactsComponent } from '../../pages/contacts/contacts.component';
import { TemplatesComponent } from '../../pages/templates/templates.component';
import { ReportsComponent } from '../../pages/reports/reports.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule
} from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    DataTablesModule
  ],
  
  declarations: [
    DashboardComponent,
    SendSmsComponent,
    ContactsComponent,
    TemplatesComponent,
    ReportsComponent,
    UserProfileComponent
  ]
})

export class AdminLayoutModule {}
