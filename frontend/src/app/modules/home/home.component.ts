import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-home',
    template: `
<table datatable [dtOptions]="dtOptions" class="table table-striped table-bordered">
  <thead>
    <tr><th>ID</th><th>First name</th><th>Last name</th></tr>
  </thead>
  <tbody>
    <tr><td>1</td><td>Foo</td><td>Bar</td></tr>
    <tr><td>2</td><td>Someone</td><td>Youknow</td></tr>
  </tbody>
</table>
`
})
export class HomeComponent implements OnInit {
    constructor() {}

    dtOptions: any = {};

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
  }

}
