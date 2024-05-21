import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowManagementComponent } from './workflow-management.component';

describe('WorkflowManagementComponent', () => {
  let component: WorkflowManagementComponent;
  let fixture: ComponentFixture<WorkflowManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkflowManagementComponent]
    });
    fixture = TestBed.createComponent(WorkflowManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
