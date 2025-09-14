import { useOrders } from "../context/OrderContext";
import { useAuth } from "../context/AuthContext";

function OrderHistory() {
  const { orders } = useOrders();
  const { user } = useAuth();

  const userOrders = user
    ? orders.filter((order) => order.email === user.email)
    : [];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Order History</h1>

      {user ? (
        userOrders.length === 0 ? (
          <p>You have no orders yet.</p>
        ) : (
          <ul className="space-y-4">
            {userOrders.map((order) => (
              <li
                key={order.id}
                className="bg-white p-4 rounded shadow space-y-2"
              >
                <p className="font-bold">Order ID: {order.id}</p>
                <p>Date: {order.date}</p>
                <p>Total: ₦{order.total.toLocaleString()}</p>
                <p>Items: {order.items.map((i) => i.name).join(", ")}</p>
              </li>
            ))}
          </ul>
        )
      ) : (
        <p>Please log in to view your orders.</p>
      )}
    </div>
  );
}

export default OrderHistory;
