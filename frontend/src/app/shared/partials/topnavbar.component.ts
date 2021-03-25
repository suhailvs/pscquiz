import {Component, TemplateRef, OnInit, Inject} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-topnav-bar',
  templateUrl: './topnavbar.component.html',
  // styleUrls: ['./topnavbarmessage.component.css'],
})

export class TopNavBarComponent implements OnInit {
  

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  
  ngOnInit() {
  }
}