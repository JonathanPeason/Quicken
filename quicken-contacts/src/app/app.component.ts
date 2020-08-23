import { Component } from '@angular/core';
import { ContactsApiService } from './shared/services/contacts-api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  readonly contactList$ = this.contactsService.currentContacts$;
  title = 'quicken-contacts';

  constructor(private contactsService: ContactsApiService) {}
}
