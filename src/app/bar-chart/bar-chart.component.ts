import { Component } from '@angular/core';
import { Color, ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent {

  panelOpenState = true;

  navLinks: any[] = [
    { path: 'OSINAD-Messages', label: 'OSINAD Messages' },
    { path: 'SSCN-Messages', label: 'SSCN Messages' },
  ];

}
