import React from "react";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { useOrders } from "../context/OrderContext";
import { PaystackButton } from "react-paystack";


function Cart() {
  const { cart, dispatch } = useCart();
  const { user } = useAuth();
  const { addOrder } = useOrders();
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const publicKey = "pk_test_4621ec23b9501a3ae30e19e456e8de84727a27eb"; // replace with your Paystack public key
  const amount = total * 100; // Paystack works in kobo
  const email = user ? user.email : "<user_email>";

  const handleSuccess = () => {
    const newOrder = {
      id: Date.now(),
      items: cart,
      total: amount / 100,
      email: email,
      date: new Date().toLocaleString(),
    };
  const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
  savedOrders.push(newOrder);
  localStorage.setItem("orders", JSON.stringify(savedOrders));

  // Clear cart (state + localStorage) 
  dispatch({ type: "CLEAR_CART" });

    addOrder(newOrder);
    alert("Payment Successful ✅ Order saved!");
  };


  const componentProps = {
    email,
    amount,
     metadata: {
      custom_fields: [
        {
          display_name: "Cart Items",
          variable_name: "cart",
          value: cart.map((item) => item.name).join(", "),
        },
      ],
    },

    publicKey,
    text: "Checkout with Paystack",
    onSuccess: handleSuccess,
    onClose: () => alert("Payment Window Closed ❌"),
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div key={index} className="flex justify-between items-center border-b py-2">
              <span>{item.name}</span>
              <span>₦{item.price.toLocaleString()}</span>
              <button
                onClick={() => dispatch({ type: "REMOVE_FROM_CART", id: item.id })}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Remove
              </button>
            </div>
          ))}
          <h3 className="mt-4 text-xl font-semibold">Total: ₦{total.toLocaleString()}</h3>
          <PaystackButton {...componentProps} className="mt-4 bg-green-500 text-white px-6 py-2 rounded" />
        </>
      )}
    </div>
  );
}
export default Cart;
