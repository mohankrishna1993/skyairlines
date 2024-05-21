import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SscnMessagesComponent } from './sscn-messages.component';

describe('SscnMessagesComponent', () => {
  let component: SscnMessagesComponent;
  let fixture: ComponentFixture<SscnMessagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SscnMessagesComponent]
    });
    fixture = TestBed.createComponent(SscnMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
