import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalsalesiconComponent } from './totalsalesicon.component';

describe('TotalsalesiconComponent', () => {
  let component: TotalsalesiconComponent;
  let fixture: ComponentFixture<TotalsalesiconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalsalesiconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalsalesiconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
