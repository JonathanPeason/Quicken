import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ContactsApiService } from 'src/app/shared/services/contacts-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {

  readonly contactList$ = this.contactsService.currentContacts$;
  constructor(private contactsService: ContactsApiService, private router: Router) { }

  navToContacts(): void {
    this.router.navigate(['/contacts']);
  }
}
