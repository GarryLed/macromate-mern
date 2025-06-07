// will remove this commponent later because it is not needed in the final version
// and I will use the Navbar component instead




const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <h1 className="text-2xl font-bold p-4">Welcome To MacroMate</h1>
      <nav className="flex justify-between items-center p-4">
        <ul className="flex space-x-6 text-sm font-medium text-gray-700">
          <li>
            <a href="/" className="hover:text-green-600 transition-colors">Home</a>
          </li>
          <li>
            <a href="/about" className="hover:text-green-600 transition-colors">Aboout</a>
          </li>
          <li>
            <a href="/contact" className="hover:text-green-600 transition-colors">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header


