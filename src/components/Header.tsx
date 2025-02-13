import type React from "react"
import { Menu, Bell, User } from "lucide-react"

interface HeaderProps {
  toggleSidebar: () => void
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  return (
    <header className="bg-background shadow-md pt-10 pb-3 pr-4">
      <div className="flex items-center justify-between">
        <button onClick={toggleSidebar} className="text-gray-500 focus:outline-none focus:text-gray-700 md:hidden">
          <Menu size={24} />
        </button>
        <div className="flex items-center">
          <input
            className="bg-gray-800 border-gray-500 placeholder:text-text focus:outline-none focus:shadow-outline border rounded-lg py-2 px-4 block w-60 appearance-none leading-normal"
            type="text"
            placeholder="Search..."
          />
        </div>
        <div className="flex items-center">
          <button className="flex mx-4 text-gray-600 focus:outline-none">
            <Bell size={24} />
          </button>
          <button className="flex text-gray-600 focus:outline-none">
            <User size={24} />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header

