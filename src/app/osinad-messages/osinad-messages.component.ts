import { Component } from '@angular/core';
import { ScaleType } from '@swimlane/ngx-charts';
import * as L from 'leaflet';

@Component({
  selector: 'app-osinad-messages',
  templateUrl: './osinad-messages.component.html',
  styleUrls: ['./osinad-messages.component.scss']
})
export class OsinadMessagesComponent {

  // map: any;

  ngOnInit() {
    // this.initMap();
  }

  barChartData = [
    { name: 'United kindoms', value: 32997 },
    { name: 'India', value: 26041 },
    { name: 'Turkey', value: 26861 },
    { name: 'Russia', value: 22015 },
    { name: 'Philppines', value: 20683},
    { name: 'Iran', value: 13792 },
    { name: 'Mexico', value: 13685 }
  ];


  barChartSettings = {
    view: [500, 300] as [number, number],
    showXAxis: true,
    showYAxis: true,
    gradient: false,
    showLegend: false,
    showXAxisLabel: true,
    showYAxisLabel: true,
    xAxisLabel: 'Volume',
    yAxisLabel: 'Country',
    showDataLabel: true,
    colorScheme: {
      name: '#2196F3',
      selectable: false,
      group: ScaleType.Ordinal,
      domain:  ["rgb(0, 0, 255)"]
    }
  };

  // initMap() {
  //   this.map = L.map('map').setView([51.505, -0.09], 13);
  //   L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  //     attribution: '&copy; OpenStreetMap contributors'
  //   }).addTo(this.map);
  // }

}
