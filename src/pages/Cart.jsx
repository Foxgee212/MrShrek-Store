import { useCart } from "../context/CartContext"

export default function Cart(){
  const { cart, dispatch} = useCart();

  return(
     <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item, index) => (
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
        ))
      )}
    </div>

  )
       
}