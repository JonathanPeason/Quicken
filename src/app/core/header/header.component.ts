import { Component, OnInit, ChangeDetectionStrategy, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit, OnDestroy {

  currentLoc = 'home';
  private routeSub: Subscription;
  constructor(private router: Router, private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.routeSub = this.router.events.subscribe((val) => {
      this.currentLoc = this.router.url.includes('contacts') ? 'contacts' : this.router.url.includes('new') ? 'new' : 'home';
      this.cd.detectChanges();
    });
  }

  navToHome(): void {
    this.router.navigate(['']);
  }

  navToContacts(): void {
    this.router.navigate(['/contacts']);
  }

  navToNew(): void {
    this.router.navigate(['/new']);
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }

}
