import { Link } from 'react-router-dom';

export default function Footer() {
   return (
        <footer className="bg-white shadow-md mt-4">
            <div className="flex justify-between items-center p-4">
                <div className="text-gray-700">
                    &copy; {new Date().getFullYear()} MacroMate. All rights reserved.
                </div>
                <nav className="flex gap-4">
                    <Link to="/privacy" className="text-gray-700 hover:text-gray-900">Privacy Policy</Link>
                    <Link to="/terms" className="text-gray-700 hover:text-gray-900">Terms of Service</Link>
                    <Link to="/contact" className="text-gray-700 hover:text-gray-900">Contact Us</Link>
                    <Link to="/about" className="text-gray-700 hover:text-gray-900">About Us</Link>
                </nav>
            </div>
        </footer>
)}
