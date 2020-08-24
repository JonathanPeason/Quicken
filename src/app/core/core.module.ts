import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    ContactsListComponent,
  ],
  exports: [
    HomeComponent,
    HeaderComponent,
    ContactsListComponent,
  ],
  imports: [CommonModule, SharedModule],
})
export class CoreModule {}
