import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
