import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent {

  navLinks: any[] = [
    { path: 'configuration', label: 'Configuration' },
    { path: 'manual-upload', label: 'Manual Upload' },
    { path: 'calendar', label: 'Calendar' },
    { path: 'in-interface', label: 'In Interface' },
    { path: 'out-interface', label: 'Out Interface' },
    { path: 'workflow-management', label: 'Workflow Management' },
    { path: 'dexceptions-trends', label: 'DExceptions Trends' }
  ];


  constructor() {
  }
}


