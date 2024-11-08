import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSuperDashboardComponent } from './ngx-super-dashboard.component';

describe('NgxSuperDashboardComponent', () => {
  let component: NgxSuperDashboardComponent;
  let fixture: ComponentFixture<NgxSuperDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxSuperDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxSuperDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
