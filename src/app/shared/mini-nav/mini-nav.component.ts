import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mini-nav',
  templateUrl: './mini-nav.component.html',
  styleUrls: ['./mini-nav.component.scss'],
})
export class MiniNavComponent implements OnInit {
  miniNavInvisibile = false;

  constructor(public breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.setLayout();
    this.breakpointObserver
      .observe(['(min-width: 998px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.setLayout();
        } else {
          this.setLayout();
        }
      });
  }

  setLayout() {
    if (window.screen.width < 998) {
      this.miniNavInvisibile = true;
    } else {
      console.log('HELLO');
      this.miniNavInvisibile = false;
    }
  }
}
