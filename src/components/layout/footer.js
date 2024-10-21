import { NavLink } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="p-4 bg-black shadow md:px-6 md:py-8">
      <nav className="flex flex-wrap justify-center -mx-5 -my-2">
        <ul className="flex space-x-8">
          <li>
            <NavLink to="/" className="text-gray-400 font-bold hover:text-gray-200">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="text-gray-400 font-bold hover:text-gray-200">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" className="text-gray-400 font-bold hover:text-gray-200">
              Services
            </NavLink>
          </li>
        </ul>
      </nav>
    </footer>
  )
}
