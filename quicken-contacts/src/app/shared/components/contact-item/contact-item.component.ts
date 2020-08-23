import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Contact } from '../../model/data-interface';

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactItemComponent implements OnInit {

  @Input() contactData: Contact;

  constructor() { }

  ngOnInit(): void {
  }

}
