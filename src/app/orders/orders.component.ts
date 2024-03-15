import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  


  orders: any[] = [
    { orderId: 1, customerName: 'Virat Kohli', orderDate: '2024-02-14', status: 'Shipped', isEditing: false, updatedStatus: 'Shipped' },
    { orderId: 2, customerName: 'Rohit Sharma', orderDate: '2024-03-15', status: 'Processing', isEditing: false, updatedStatus: 'Processing' },
    { orderId: 3, customerName: 'Ms Dhoni', orderDate: '2024-03-16', status: 'Delivered', isEditing: false, updatedStatus: 'Delivered' },
    // Add more mock data as needed
  ];

  

ngOnInit(){


  
console.log(this.orders)
}

  viewOrderDetails(order: any) {
    // Implement logic to view order details
    console.log('Viewing order details:', order);
  }

  toggleEditStatus(order: any) {
    order.isEditing = !order.isEditing;
    if (!order.isEditing) {
      // Save changes
      order.status = order.updatedStatus;
      console.log('Updated order status:', order);
    }
  }

  deleteOrder(order: any) {
    // Implement logic to delete order
    console.log('Deleting order:', order);
    const index = this.orders.findIndex(o => o.orderId === order.orderId);
    if (index !== -1) {
      this.orders.splice(index, 1);
    }
  }
  updateOrderStatus(order: any) {
    // Implement the logic to update the order status
    console.log('Updating order status:', order.updatedStatus);
    // You need to implement the actual logic here to update the order status
  }
}

