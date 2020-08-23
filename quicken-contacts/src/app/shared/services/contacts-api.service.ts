import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from '../model/data-interface';
import { take } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactsApiService {
  readonly currentContacts$ = new BehaviorSubject<Contact[]>([]);
  private contactList: Contact[];

  constructor(private http: HttpClient) {
    /*
     Populate internal contact list and set the behaviorSubject for reactive use.
     Use take to auto unsubribe as there is never new data from the api call.
     */
    this.http
      .get<Contact[]>('http://demo5838836.mockable.io/contact')
      .pipe(take(1))
      .subscribe((value) => {
        this.contactList = value;
        this.updateCurrentContacts();
      });
  }

  public addNewContact(newContact: Contact): void {
    if (this.contactList) {
      this.contactList.push(newContact);
      this.updateCurrentContacts();
    }
  }

  public removeContact(index = -1): void {
    if (index < this.contactList?.length - 1 && index > -1) {
      this.contactList.splice(index, 1);
      this.updateCurrentContacts();
    }
  }

  private updateCurrentContacts(): void {
    this.currentContacts$.next(this.contactList);
  }
}
