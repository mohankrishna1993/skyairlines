import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DexceptionsTrendsComponent } from './dexceptions-trends.component';

describe('DexceptionsTrendsComponent', () => {
  let component: DexceptionsTrendsComponent;
  let fixture: ComponentFixture<DexceptionsTrendsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DexceptionsTrendsComponent]
    });
    fixture = TestBed.createComponent(DexceptionsTrendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
