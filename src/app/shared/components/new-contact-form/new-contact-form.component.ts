import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { Contact } from '../../model/data-interface';
import { ContactsApiService } from '../../services/contacts-api.service';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-new-contact-form',
  templateUrl: './new-contact-form.component.html',
  styleUrls: ['./new-contact-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewContactFormComponent {
  showSaved = false;

  contactForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    company: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email, Validators.maxLength(50)]),
    phone: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
  });

  // Make accessors for all fields so visual responses can be given for validiation...
  get firstName(): AbstractControl {
    return this.contactForm.get('firstName');
  }

  get lastName(): AbstractControl {
    return this.contactForm.get('lastName');
  }

  get company(): AbstractControl {
    return this.contactForm.get('company');
  }

  get phone(): AbstractControl {
    return this.contactForm.get('phone');
  }

  get address(): AbstractControl {
    return this.contactForm.get('address');
  }

  get emailAddress(): AbstractControl {
    return this.contactForm.get('email');
  }
  constructor(private contactService: ContactsApiService, private router: Router) { }

  onSubmit(): void {
    const newContact: Contact = {...this.contactForm.value};
    this.contactService.addNewContact(newContact);
    // Per requirment seralize data and send it to the console.
    console.log('serialized input data', JSON.stringify(newContact));
    this.contactForm.reset();
    this.showSaved = true;

    // Make a sort delay to display the saved message before navigating, you could also use rxjs timer if desired...
    setTimeout(() => {
      this.showSaved = false;
      this.router.navigate(['/contacts']);
    }, 2000);
  }

}
