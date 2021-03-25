import {Component, OnInit} from '@angular/core';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';

@Component({
  template: ''
})

export class LogoutComponent implements OnInit {
  constructor(private auth: AuthService, private router: Router) {
  }

  ngOnInit() {
  	alert('going to logout.')
    this.auth.logout().subscribe(response => {
    	alert('logged out succesfully');
	    this.router.navigate(['login']);
    });
  }
}
