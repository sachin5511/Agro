import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  CalendarDays,
  Package,
  ArrowLeft,
  CreditCard,
  MapPin,
  Truck,
} from 'lucide-react';

const OrderDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [orderSummaries, setOrderSummaries] = useState([]);

  useEffect(() => {
    const existingOrders =
      JSON.parse(localStorage.getItem('orderSummary')) || [];
    setOrderSummaries(existingOrders);
  }, []);

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

  const order2 =
    orderSummaries.find((order) => order.id == id) || orderSummaries[0];

  return (
    <>
      <div className="container mx-auto py-10 px-4">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <button
                onClick={() => navigate('/about')}
                className="inline-flex items-center text-sm font-medium text-blue-600 mb-2"
              >
                <ArrowLeft className="mr-1 h-4 w-4" />
                Back to Order History
              </button>
              <h1 className="text-3xl font-bold tracking-tight">
                Order #{order2?.id}
              </h1>
              <p className="text-gray-500 mt-1 flex items-center gap-1">
                <CalendarDays className="h-3 w-3" />
                Placed on {order2?.date}
              </p>
            </div>
            <span
              className={`w-fit px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusVariant(
                order2?.status
              )}`}
            >
              {order2?.status}
            </span>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="md:col-span-2 border-1 border-gray-700 rounded-lg shadow-sm">
              <div className="p-4 sm:p-6 border-b border-gray-700">
                <h2 className="text-xl font-semibold">Order Items</h2>
                <p className="text-gray-500 text-sm">
                  Items included in your order
                </p>
              </div>
              <div className="p-4 sm:p-6">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left py-2 font-medium">Product</th>
                      <th className="text-right py-2 font-medium">Quantity</th>
                      <th className="text-right py-2 font-medium">Price</th>
                      <th className="text-right py-2 font-medium">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {order2
                      ? order2.storedProduct.map((item, index) => (
                          <tr key={index} className="border-b border-gray-700">
                            <td className="py-4 font-medium">{item.name}</td>
                            <td className="py-4 text-right">{item.quantity}</td>
                            <td className="py-4 text-right">
                              {item.price.toFixed(2)}
                            </td>
                            <td className="py-4 text-right">
                              {item.price.toFixed(2)}
                            </td>
                          </tr>
                        ))
                      : []}
                  </tbody>
                </table>

                <div className="mt-6 space-y-4">
                  <div className=" border-t border-gray-700 flex justify-between">
                    <span>Subtotal</span>
                    <span>{order2?.total.toFixed(2) || []}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>{order2?.shippingCharge.toFixed(2) || []}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax</span>
                    <span>{order2?.tax || []}.00</span>
                  </div>
                  {order2?.discount ? (
                    <div className="flex justify-between">
                      <span>Discount</span>
                      <span>{order2?.discount || []}.00</span>
                    </div>
                  ) : (
                    []
                  )}
                  <div className=" border-b border-gray-700 flex justify-between font-medium">
                    <span>Total</span>
                    <span>{order2?.finalAmount || []}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              {/* ShipPing Information */}
              <div className="border-1 border-gray-700 rounded-lg shadow-sm">
                <div className="p-4 sm:p-6 border-b border-gray-700">
                  <h2 className="text-lg font-semibold flex items-center gap-2">
                    <Truck className="h-5 w-5" />
                    Shipping Information
                  </h2>
                </div>
                <div className="p-4 sm:p-6">
                  <div className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 mt-0.5 text-gray-500" />
                    <div>
                      <p className="font-medium">
                        {order2?.address.houseflatNo},
                        {order2?.address.firstName} {order2?.address.lastName}
                      </p>
                      <p className="text-sm text-gray-500">
                        {order2?.address.address},{order2?.address.landmark},{' '}
                        {order2?.address.city}
                      </p>
                      <p className="text-sm text-gray-500">
                        {' '}
                        {order2?.address.phoneNumber}
                      </p>
                    </div>
                  </div>

                  {order2?.status === 'Shipped' ||
                  order2?.status === 'Delivered' ? (
                    <div className="mt-4">
                      <p className="text-sm font-medium">Tracking Number</p>
                      <p className="text-sm text-gray-500">TRK12345678901234</p>
                      <button className="mt-2 px-3 py-1 text-sm border-1 border-gray-700 rounded-md">
                        Track Package
                      </button>
                    </div>
                  ) : null}
                </div>
              </div>

              {/* Payment Information */}
              <div className="border-1 border-gray-500 rounded-lg shadow-sm">
                <div className="p-4 sm:p-6 border-b border-gray-700">
                  <h2 className="text-lg font-semibold flex items-center gap-2">
                    <CreditCard className="h-5 w-5" />
                    Payment Information
                  </h2>
                </div>
                <div className="p-4 sm:p-6">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <p className="text-sm">Payment Method</p>
                      <p className="text-sm font-medium">
                        {order2?.paymentMethod}
                      </p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-sm">Card</p>
                      <p className="text-sm font-medium">•••• 4242</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Need Help */}
              <div className=" border-1 border-gray-700 rounded-lg shadow-sm">
                <div className="p-4 sm:p-6 border-b border-gray-700">
                  <h2 className="text-lg font-semibold flex items-center gap-2">
                    <Package className="h-5 w-5" />
                    Need Help?
                  </h2>
                </div>
                <div className="p-4 sm:p-6 space-y-2">
                  <button className="w-full px-4 py-2 border-1 border-gray-700 rounded-md">
                    Return or Exchange
                  </button>
                  <button className="w-full px-4 py-2 border-1 border-gray-700 rounded-md">
                    Contact Support
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderDetail;
