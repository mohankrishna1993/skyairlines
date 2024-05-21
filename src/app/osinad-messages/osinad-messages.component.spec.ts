import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OsinadMessagesComponent } from './osinad-messages.component';

describe('OsinadMessagesComponent', () => {
  let component: OsinadMessagesComponent;
  let fixture: ComponentFixture<OsinadMessagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OsinadMessagesComponent]
    });
    fixture = TestBed.createComponent(OsinadMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
