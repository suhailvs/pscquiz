import {Component, OnInit, OnDestroy, Inject,Renderer2, AfterViewInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common'

import {AuthService} from './auth.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles:[`
  .logo {
      margin: 0;
      font-size: 2em;
      font-weight: 200;
      color: #92c35e;
      text-align: center;
      text-shadow: 1px 1px 0 #333333;
      line-height: 70px;
    }
    `]
})

export class LoginComponent implements OnInit, OnDestroy {
  user: any = {};
  loading = false;
  returnUrl: string;
  loginErrors: string;

  constructor(
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private renderer: Renderer2,
    private toastr: ToastrService,
    private titleService: Title,
    @Inject(DOCUMENT) private document: Document,
  ) {
  }

  onLogin(): void {
    this.loading = true;
    this.auth.login(this.user)
      .subscribe(response => {
          this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
          this.router.navigate([this.returnUrl]);
        },
        error => {

          if (error.error.status === '0') {
            this.toastr.info(error.error.message, 'Error..!');
          }
          else if (error.error.status === '1') {
            this.toastr.warning(error.error.message, 'Error..!');
          }
          else {
            this.toastr.error('Incorrect username or password. Try again...', 'Error..!');
          }
          this.loading = false;
        }
      );
  }


  ngOnInit(): void {
    
    this.renderer.addClass(this.document.body, 'login');
  }

  ngOnDestroy() {
    this.renderer.removeClass(document.body, 'login');
  }

}
