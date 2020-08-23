import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddContactComponent } from './add-contact/add-contact.component';
import { HomeComponent } from './home/home.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  declarations: [
    AddContactComponent,
    HomeComponent,
    HeaderComponent,
    ContactsListComponent,
  ],
  exports: [
    AddContactComponent,
    HomeComponent,
    HeaderComponent,
    ContactsListComponent,
  ],
  imports: [CommonModule, SharedModule],
})
export class CoreModule {}
