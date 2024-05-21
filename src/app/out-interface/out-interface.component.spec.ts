import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutInterfaceComponent } from './out-interface.component';

describe('OutInterfaceComponent', () => {
  let component: OutInterfaceComponent;
  let fixture: ComponentFixture<OutInterfaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OutInterfaceComponent]
    });
    fixture = TestBed.createComponent(OutInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
