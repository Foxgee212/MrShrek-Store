import React from "react";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { useOrders } from "../context/OrderContext";
import { PaystackButton } from "react-paystack";
import { Plus, Minus, Trash2 } from "lucide-react"; // ✅ icons

function Cart() {
  const { cart, increment, decrement, removeFromCart, clearCart } = useCart();
  const { user } = useAuth();
  const { addOrder } = useOrders();

  // ✅ Calculate total
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const publicKey = "pk_live_8ae3997fa52803c7789fd20cf9b114f07bc9ccf4"; // replace with your Paystack key
  const amount = total * 100; // Paystack uses kobo
  const email = user ? user.email : "<user_email>";

  const handleSuccess = () => {
    const newOrder = {
      id: Date.now(),
      items: cart,
      total,
      email,
      date: new Date().toLocaleString(),
    };

    const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    savedOrders.push(newOrder);
    localStorage.setItem("orders", JSON.stringify(savedOrders));

    clearCart();
    addOrder(newOrder);

    alert("✅ Payment Successful! Your order has been saved.");
  };

  const componentProps = {
    email,
    amount,
    metadata: {
      custom_fields: [
        {
          display_name: "Cart Items",
          variable_name: "cart",
          value: cart.map((item) => `${item.name} x${item.quantity}`).join(", "),
        },
      ],
    },
    publicKey,
    text: "Checkout with Paystack",
    onSuccess: handleSuccess,
    onClose: () => alert("❌ Payment Window Closed"),
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Your Cart</h2>
      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 p-4 bg-white shadow rounded-lg"
              >
                {/* Product Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-30 h-30 object-scale-down rounded"
                />

                {/* Product Info */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-500 text-sm">
                    ₦{item.price.toLocaleString()}
                  </p>
                  <p className="text-gray-400 text-xs">
                    Quantity: {item.quantity}
                  </p>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => decrement(item.id)}
                    className="p-2 rounded-full bg-yellow-500 text-white hover:bg-yellow-600"
                  >
                    <Minus size={16} />
                  </button>

                  <span className="px-2 font-medium">{item.quantity}</span>

                  <button
                    onClick={() => increment(item.id)}
                    className="p-2 rounded-full bg-green-500 text-white hover:bg-green-600"
                  >
                    <Plus size={16} />
                  </button>
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="p-2 rounded-full bg-red-500 text-white hover:bg-red-600"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))}
          </div>

          {/* Cart Summary */}
          <div className="mt-8 p-6 bg-gray-50 shadow rounded-lg">
            <h3 className="text-xl font-semibold mb-4">
              Total: ₦{total.toLocaleString()}
            </h3>

            <div className="flex gap-4">
              <button
                onClick={clearCart}
                className="bg-red-700 text-white px-4 py-2 rounded hover:bg-red-800"
              >
                Clear Cart
              </button>

              <PaystackButton
                {...componentProps}
                disabled={cart.length === 0 || total === 0}
                className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 disabled:opacity-50"
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
