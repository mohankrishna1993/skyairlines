import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InInterfaceComponent } from './in-interface/in-interface.component';
import { MainContentComponent } from './main-content/main-content.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { ManualUploadComponent } from './manual-upload/manual-upload.component';
import { CalendarComponent } from './calendar/calendar.component';
import { OutInterfaceComponent } from './out-interface/out-interface.component';
import { WorkflowManagementComponent } from './workflow-management/workflow-management.component';
import { OsinadMessagesComponent } from './osinad-messages/osinad-messages.component';
import { SscnMessagesComponent } from './sscn-messages/sscn-messages.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'configuration', component: ConfigurationComponent },
  { path: 'manual-upload', component: ManualUploadComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'in-interface', component: InInterfaceComponent, children: [
    { path: 'OSINAD-Messages', component: OsinadMessagesComponent },
    { path: 'SSCN-Messages', component: SscnMessagesComponent },
  ] },
  { path: 'out-interface', component: OutInterfaceComponent },
  { path: 'workflow-management', component: WorkflowManagementComponent },
  // { path: 'OSINAD-Messages', component: OsinadMessagesComponent },
  // { path: 'SSCN-Messages', component: SscnMessagesComponent },
  {
    path: 'charts',
    component: BarChartComponent,

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
