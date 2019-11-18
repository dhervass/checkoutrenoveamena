import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'amena-cesta-standalone',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @Input() environmentBrand = '';
  @Input() moduleData: any = null;
  private onDestroy$ = new Subject<void>();

  constructor(
  ) {

  }

  ngOnInit() {

  }



  ngOnDestroy() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}

