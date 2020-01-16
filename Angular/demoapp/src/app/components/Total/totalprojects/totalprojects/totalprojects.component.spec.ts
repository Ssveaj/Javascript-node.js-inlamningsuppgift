import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalprojectsComponent } from './totalprojects.component';

describe('TotalprojectsComponent', () => {
  let component: TotalprojectsComponent;
  let fixture: ComponentFixture<TotalprojectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalprojectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalprojectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
