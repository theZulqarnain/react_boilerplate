import { NavLink } from "react-router-dom"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 px-6 pt-4 pb-4 lg:px-8 bg-white shadow-md">
      <nav className="flex items-center justify-center" aria-label="Global">
        <ul className="flex space-x-8">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "text-sky-600 border-b-2 border-sky-600" : "text-gray-700 hover:text-gray-900")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "text-sky-600 border-b-2 border-sky-600" : "text-gray-700 hover:text-gray-900")}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) => (isActive ? "text-sky-600 border-b-2 border-sky-600" : "text-gray-700 hover:text-gray-900")}
            >
              Services
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
