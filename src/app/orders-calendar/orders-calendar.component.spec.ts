import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersCalendarComponent } from './orders-calendar.component';

describe('OrdersCalendarComponent', () => {
  let component: OrdersCalendarComponent;
  let fixture: ComponentFixture<OrdersCalendarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrdersCalendarComponent]
    });
    fixture = TestBed.createComponent(OrdersCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
