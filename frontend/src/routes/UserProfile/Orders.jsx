import React from "react";

const orders = [
  {
    orderId: "1001",
    date: "2023-09-15",
    total: "$150.00",
    status: "Shipped",
    actions: "View",
  },
  {
    orderId: "1002",
    date: "2023-09-20",
    total: "$200.00",
    status: "Delivered",
    actions: "View",
  },
  {
    orderId: "1001",
    date: "2023-09-15",
    total: "$150.00",
    status: "Shipped",
    actions: "View",
  },
  {
    orderId: "1002",
    date: "2023-09-20",
    total: "$200.00",
    status: "Delivered",
    actions: "View",
  },
  {
    orderId: "1001",
    date: "2023-09-15",
    total: "$150.00",
    status: "Shipped",
    actions: "View",
  },
  {
    orderId: "1002",
    date: "2023-09-20",
    total: "$200.00",
    status: "Delivered",
    actions: "View",
  },
  // Add more orders as needed
];

const Orders = () => {
  return (
    <div className="max-w-4xl mx-auto my-6 ">
      <h2 className="text-2xl text-center font-semibold mb-6"> Orders</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 text-center">Order ID</th>
              <th className="px-4 py-2 text-center">Date</th>
              <th className="px-4 py-2 text-center">Total</th>
              <th className="px-4 py-2 text-center">Status</th>
              <th className="px-4 py-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {orders.map((order) => (
              <tr key={order.orderId}>
                <td className="border text-center  px-4 py-2">
                  {order.orderId}
                </td>
                <td className="border text-center px-4 py-2">{order.date}</td>
                <td className="border text-center px-4 py-2">{order.total}</td>
                <td className="border text-center px-4 py-2">{order.status}</td>
                <td className="border text-center px-4 py-2">
                  <button className="bg-neutral-700 px-4 mx-2 py-1 text-white rounded-sm hover:bg-white border hover:border-black hover:text-black hover:opacity-90 hover:duration-300">
                    {order.actions}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
