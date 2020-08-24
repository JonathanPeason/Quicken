import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewContactFormComponent } from './components/new-contact-form/new-contact-form.component';
import { ContactItemComponent } from './components/contact-item/contact-item.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [ContactItemComponent, NewContactFormComponent],
  exports: [ContactItemComponent, NewContactFormComponent],
  imports: [CommonModule, ReactiveFormsModule],
})
export class SharedModule {}
