import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Contact } from '../../model/data-interface';
import { ContactsApiService } from '../../services/contacts-api.service';

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactItemComponent {

  @Input() contactData: Contact;

  constructor(private contactService: ContactsApiService) { }

  /**
   * @description class service to delete this current contact
   */
  deletContact(): void {
    this.contactService.removeContact(this.contactData.index);
  }

}
