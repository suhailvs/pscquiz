import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from './not-found.component';
import { MaintenanceModeComponent } from './maintenance.component';
const routes: Routes = [
  { path: '', component: NotFoundComponent },
  { path: 'maintenance', component: MaintenanceModeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorPagesRoutingModule {
}
