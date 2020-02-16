import { Component, OnInit, OnDestroy } from '@angular/core';
import { CookiesPolicyService } from './pages/cookies-policy/cookies-policy.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  public showPolicyCookies$: Observable<boolean>;

  constructor(private ckPolicySrv: CookiesPolicyService) {
    this.showPolicyCookies$ = this.ckPolicySrv.getStatusControlPolicyCookies();
  }

  ngOnInit() {}

  ngOnDestroy() {}
}
