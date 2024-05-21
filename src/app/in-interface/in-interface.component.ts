import { Component } from '@angular/core';

@Component({
  selector: 'app-in-interface',
  templateUrl: './in-interface.component.html',
  styleUrls: ['./in-interface.component.scss']
})
export class InInterfaceComponent {
  selectedType: string = 'monthYear';
  options = ['monthYear', 'dateRange', ];
  

}
