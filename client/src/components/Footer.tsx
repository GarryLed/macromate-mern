import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-white shadow-md mt-4">
      <p className="text-center text-gray-700">
        &copy; {new Date().getFullYear()} MacroMate. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer