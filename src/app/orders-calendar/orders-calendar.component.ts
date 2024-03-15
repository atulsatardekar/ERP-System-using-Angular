import { Component, Input, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import daygrid from '@fullcalendar/daygrid';

@Component({
  selector: 'app-orders-calendar',
  templateUrl: './orders-calendar.component.html',
  styleUrls: ['./orders-calendar.component.css']
})
export class OrdersCalendarComponent implements OnInit{

  @Input() orders!: any[];
  calendarOptions!: CalendarOptions;



  constructor() { }

  ngOnInit(): void {
    this.initializeCalendar();
  }

  initializeCalendar(): void {
    if (this.orders) {
      const events = this.orders.map(order => ({
        title: `Order ${order.orderId} - ${order.customerName}`,
        start: order.orderDate,
        allDay: true
      }));

      this.calendarOptions = {
        plugins: [daygrid], // Include dayGrid plugin
        initialView: 'dayGridMonth',
        headerToolbar: {
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        events: events
      };
    }
  }
}

