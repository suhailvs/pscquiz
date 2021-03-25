import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-maintenacemode',
  template: `
  <article>
  <h1>We&rsquo;ll be back soon!</h1>
  <div>
      <p>
        Sorry for the inconvenience
        but we&rsquo;re performing some maintenance at the moment.
        We&rsquo;ll be back online shortly!</p>
        <p>&mdash; Vidhyadhan
      </p>
  </div>
</article>
    `,
styles: [`
  h1 { font-size: 50px; }
  article {
    text-align: center;
    padding: 150px;
    font: 20px Helvetica, sans-serif;
    display: block;
    text-align: left;
    margin: 0 auto;
  }
`]
})
export class MaintenanceModeComponent implements OnInit {
  ngOnInit() {
    // if user refresh check maintenance mode active
    // if active redirect to login page
  }
}


