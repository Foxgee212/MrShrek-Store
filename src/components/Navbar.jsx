import { Link } from "react-router-dom";

export default  function Navbar(){
    return (
        <nav className="bg-yellow-500 p-4 shadow-md flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold text-white">MyShop</Link>
            <div className="space-x-6">
                <Link to="/" className="text-white hover:underline">Home</Link>
                <Link to="/cart" className="text-white hover:underline">Cart</Link>
                <Link to="/login" className="text-white hover:underline">Login</Link>
            </div>
        </nav>
    )
}