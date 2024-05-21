import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InInterfaceComponent } from './in-interface.component';

describe('InInterfaceComponent', () => {
  let component: InInterfaceComponent;
  let fixture: ComponentFixture<InInterfaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InInterfaceComponent]
    });
    fixture = TestBed.createComponent(InInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
