import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { ContactsApiService } from 'src/app/shared/services/contacts-api.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactsListComponent implements OnInit, OnDestroy {
  readonly contactsList$ = this.contactsService.currentContacts$;
  isList = this.router.url.includes('contacts');

  private routeSub: Subscription;

  constructor(private contactsService: ContactsApiService, private router: Router) { }

  ngOnInit(): void {
    this.routeSub = this.router.events.subscribe((val) => {
      this.isList = this.router.url.includes('contacts');
    });
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }

  navToNew(): void {
    this.router.navigate(['/new']);
  }
}
