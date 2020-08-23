import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewContactFormComponent } from './components/new-contact-form/new-contact-form.component';
import { ContactItemComponent } from './components/contact-item/contact-item.component';

@NgModule({
  declarations: [ContactItemComponent, NewContactFormComponent],
  exports: [ContactItemComponent, NewContactFormComponent],
  imports: [CommonModule],
})
export class SharedModule {}
