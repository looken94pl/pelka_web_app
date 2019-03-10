import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarHorizontalComponent } from './navbar-horizontal.component';

describe('NavbarHorizontalComponent', () => {
  let component: NavbarHorizontalComponent;
  let fixture: ComponentFixture<NavbarHorizontalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarHorizontalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
