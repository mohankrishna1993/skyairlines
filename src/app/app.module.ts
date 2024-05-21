import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TopNavbarComponent } from './top-navbar/top-navbar.component';
import { SideNavbarComponent } from './side-navbar/side-navbar.component';
import { MainContentComponent } from './main-content/main-content.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { InInterfaceComponent } from './in-interface/in-interface.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { ManualUploadComponent } from './manual-upload/manual-upload.component';
import { CalendarComponent } from './calendar/calendar.component';
import { OutInterfaceComponent } from './out-interface/out-interface.component';
import { WorkflowManagementComponent } from './workflow-management/workflow-management.component';
import { DexceptionsTrendsComponent } from './dexceptions-trends/dexceptions-trends.component';
import { FormsModule } from '@angular/forms';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MatExpansionModule} from '@angular/material/expansion';
import { OsinadMessagesComponent } from './osinad-messages/osinad-messages.component';
import { SscnMessagesComponent } from './sscn-messages/sscn-messages.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavbarComponent,
    SideNavbarComponent,
    MainContentComponent,
    InInterfaceComponent,
    ConfigurationComponent,
    ManualUploadComponent,
    CalendarComponent,
    OutInterfaceComponent,
    WorkflowManagementComponent,
    DexceptionsTrendsComponent,
    BarChartComponent,
    OsinadMessagesComponent,
    SscnMessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatRadioModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    FormsModule,
    NgxChartsModule,
    MatExpansionModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
