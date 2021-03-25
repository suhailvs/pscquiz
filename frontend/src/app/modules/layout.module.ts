import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LayoutComponent} from './layout.component';
import {TopNavBarComponent} from '../shared/partials/topnavbar.component';

// import {SidebarMenuComponent} from '../shared/partials/sidebarmenu.component';

import {LayoutRoutingModule} from './layout-routing.module';

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
  ],
  declarations: [
    LayoutComponent,
    TopNavBarComponent,
    // SidebarMenuComponent,
  ],
})
export class LayoutModule {
}
