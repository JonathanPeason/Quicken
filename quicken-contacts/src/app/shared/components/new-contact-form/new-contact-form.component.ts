import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-new-contact-form',
  templateUrl: './new-contact-form.component.html',
  styleUrls: ['./new-contact-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewContactFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
