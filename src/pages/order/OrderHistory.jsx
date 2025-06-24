import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  CalendarDays,
  ChevronRight,
  Package,
  ShoppingCart,
} from 'lucide-react';

const OrderHistory = () => {
  const [orderSummaries, setOrderSummaries] = useState([]);

  useEffect(() => {
    const existingOrders =
      JSON.parse(localStorage.getItem('orderSummary')) || [];
    setOrderSummaries(existingOrders);
  }, []);

  
  console.log(orderSummaries)
  // const orders = [
  //   {
  //     id: 'ORD-2023-1001',
  //     date: 'March 1, 2023',
  //     status: 'Delivered',
  //     total: 129.99,
  //     items: [
  //       { name: 'Wireless Headphones', quantity: 1, price: 79.99 },
  //       { name: 'Phone Case', quantity: 1, price: 19.99 },
  //       { name: 'Screen Protector', quantity: 2, price: 15.0 },
  //     ],
  //   },
  //   {
  //     id: 'ORD-2023-0892',
  //     date: 'February 15, 2023',
  //     status: 'Shipped',
  //     total: 249.95,
  //     items: [
  //       { name: 'Smart Watch', quantity: 1, price: 199.95 },
  //       { name: 'Watch Band', quantity: 2, price: 25.0 },
  //     ],
  //   },
  //   {
  //     id: 'ORD-2023-0754',
  //     date: 'January 28, 2023',
  //     status: 'Delivered',
  //     total: 85.97,
  //     items: [
  //       { name: 'Bluetooth Speaker', quantity: 1, price: 59.99 },
  //       { name: 'USB-C Cable', quantity: 2, price: 12.99 },
  //     ],
  //   },
  //   {
  //     id: 'ORD-2022-6543',
  //     date: 'December 10, 2022',
  //     status: 'Cancelled',
  //     total: 349.99,
  //     items: [{ name: 'Tablet', quantity: 1, price: 349.99 }],
  //   },
  //   {
  //     id: 'ORD-2022-5421',
  //     date: 'November 25, 2022',
  //     status: 'Delivered',
  //     total: 124.95,
  //     items: [
  //       { name: 'Wireless Earbuds', quantity: 1, price: 89.99 },
  //       { name: 'Charging Case', quantity: 1, price: 34.96 },
  //     ],
  //   },
  // ];

  // Helper functions
  function getStatusVariant(status) {
    switch (status) {
      case 'Delivered':
        return 'bg-green-100 text-green-800';
      case 'Processing':
        return 'bg-blue-100 text-blue-800';
      case 'Shipped':
        return 'bg-purple-100 text-purple-800';
      case 'Cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  }

  return (
    <>
      <div className="container mx-auto py-10 px-4 mt-5">
        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Order History</h1>
            <p className="text-gray-500 mt-2">
              View and manage your previous orders
            </p>
          </div>

          <div className="grid gap-6">
            {
              orderSummaries?
              orderSummaries.map((order) => (
                <div
                  key={order.id}
                  className="border-1 border-gray-700 rounded-lg shadow-sm overflow-hidden"
                >
                  <div className="border-b border-gray-700 bg-gray-50 flex flex-row items-center justify-between p-4 sm:p-6">
                    <div className="grid gap-1">
                      <h2 className="text-base sm:text-lg font-semibold">
                        Order #{order.id}
                      </h2>
                      <div className="flex items-center gap-1 text-gray-500 text-sm ">
                        <CalendarDays className="h-3 w-3" />
                        {order.date}
                      </div>
                    </div>
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusVariant(
                        order.status
                      )}`}
                    >
                      {order.status}
                    </span>
                  </div>
                  <div className="p-4 sm:p-6">
                    <div className="grid gap-4">
                      <div className="flex flex-col sm:flex-row justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <div className=" border-1 border-gray-700 bg-gray-100 flex h-10 w-10 items-center justify-center rounded-full">
                            <Package className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="font-medium">
                              {order.storedProduct.length}{' '}
                              {order.storedProduct.length === 1 ? 'item' : 'items'}
                            </p>
                            <p className="text-sm text-gray-500">
                              Total: ${order.total.toFixed(2)}
                            </p>
                          </div>
                        </div>
                        <Link to={`/orders/${order.id}`} className="mt-2 sm:mt-0">
                          <button className="w-full sm:w-auto px-4 py-2 border-1 border-gray-700 rounded-md flex items-center justify-center">
                            View Order Details
                            <ChevronRight className="ml-1 h-4 w-4" />
                          </button>
                        </Link>
                      </div>
                      <div className="hidden sm:block">
                        <div className="flex flex-wrap gap-2">
                          {order.storedProduct.slice(0, 3).map((item, index) => (
                            <div
                              key={index}
                              className="flex items-center gap-2 rounded-lg border-1 border-gray-700 p-2"
                            >
                              <div className="bg-white flex h-10 w-10 items-center justify-center rounded">
                                <ShoppingCart className="h-5 w-5" />
                              </div>
                              <div>
                                <p className="text-sm font-medium">{item.name}</p>
                                <p className="text-xs text-gray-500">
                                  Qty: {item.quantity}
                                </p>
                              </div>
                            </div>
                          ))}
                          {order.storedProduct.length > 3 && (
                            <div className="flex items-center rounded-lg border-1 border-gray-700 p-2">
                              <p className="text-sm text-gray-500">
                                +{order.storedProduct.length - 3} more
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )):[]
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderHistory;
