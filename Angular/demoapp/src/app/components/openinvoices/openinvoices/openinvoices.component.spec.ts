import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpeninvoicesComponent } from './openinvoices.component';

describe('OpeninvoicesComponent', () => {
  let component: OpeninvoicesComponent;
  let fixture: ComponentFixture<OpeninvoicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpeninvoicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpeninvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
