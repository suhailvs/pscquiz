import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorPagesRoutingModule } from './errorpages-routing.module';
import { NotFoundComponent } from './not-found.component';
import { MaintenanceModeComponent } from './maintenance.component';

// https://www.thecodecampus.de/blog/angular-universal-handle-404-set-status-codes/

@NgModule({
  imports: [
    CommonModule,
    ErrorPagesRoutingModule,
  ],
  declarations: [
    NotFoundComponent,
    MaintenanceModeComponent
    ]
})
export class ErrorPagesModule { }
