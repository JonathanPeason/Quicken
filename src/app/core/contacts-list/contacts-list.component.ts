import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ContactsApiService } from 'src/app/shared/services/contacts-api.service';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactsListComponent {

  readonly contactsList$ = this.contactsService.currentContacts$;
  constructor(private contactsService: ContactsApiService) { }
}
