// will remove this commponent later because it is not needed in the final version
// and I will use the Navbar component instead
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className="bg-white shadow-md">
            <nav className="flex gap-4 p-4">
                <Link to="/" className="font-bold">MacroMate</Link>
                <Link to="/meals" className="text-gray-700 hover:text-gray-900">Meals</Link>
                <Link to="/recipes" className="text-gray-700 hover:text-gray-900">Recipes</Link>
                <Link to="/grocery-list" className="text-gray-700 hover:text-gray-900">Grocery List</Link>
                <Link to="/settings" className="text-gray-700 hover:text-gray-900">Settings</Link>
                <Link to="/login" className="text-gray-700 hover:text-gray-900">Login</Link>
                <Link to="/register" className="text-gray-700 hover:text-gray-900">Register</Link>
                <Link to="/profile" className="text-gray-700 hover:text-gray-900">Profile</Link>
                <Link to="/about" className="text-gray-700 hover:text-gray-900">About</Link>
            </nav>
        </header>
    )
}