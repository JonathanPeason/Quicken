import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { ContactsListComponent } from './core/contacts-list/contacts-list.component';
import { AddContactComponent } from './core/add-contact/add-contact.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'list',
    component: ContactsListComponent,
  },
  {
    path: 'add',
    component: AddContactComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
